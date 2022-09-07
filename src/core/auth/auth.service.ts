import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
	constructor(
		private readonly _userService: UserService,
		private readonly _jwtService: JwtService,
	) {}

	async validateUser(email: string, password: string): Promise<User> {
		let user: User;
		try {
			user = await this._userService.findOne(email);
			if (user && (await bcrypt.compare(password, user.password))) {
				delete user.password;
			} else {
				user = null;
			}
		} catch (error) {
			throw new UnauthorizedException({
				message: 'Authentication error. Your email or password are wrong.',
			});
		}

		return user;
	}

	async login(user: User): Promise<string> {
		return this._jwtService.sign({
			firstName: user.firstName,
			lastName: user.lastName,
			sub: user.id,
		});
	}

	async signUp(user: User): Promise<User> {
		const hashPassword = await bcrypt.hash(
			user.password,
			await bcrypt.genSalt(),
		);
		user.password = hashPassword;
		return await this._userService.create(user);
	}

	async resetPassword(
		email: string,
		oldPassword: string,
		newPassword: string,
	): Promise<User> {
		const user = await this.validateUser(email, oldPassword);

		const newHashPassword = await bcrypt.hash(
			newPassword,
			await bcrypt.genSalt(),
		);
		user.password = newHashPassword;
		return this._userService.updateUser(user);
	}
}
