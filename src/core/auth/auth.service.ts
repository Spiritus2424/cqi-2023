import { Injectable } from '@nestjs/common';
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
		let user = await this._userService.findOne(email);

		if (user && (await bcrypt.compare(password, user.password))) {
			delete user.password;
		} else {
			user = null;
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
}
