import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
	constructor(private readonly _userService: UserService) {}

	async validateUser(email: string, password: string): Promise<any> {
		const user = await this._userService.findOne(email);
		if (user && user.password === password) {
			const { password, ...rest } = user;
			return rest;
		}
		return null;
	}
}
