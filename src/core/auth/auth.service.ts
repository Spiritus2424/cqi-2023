import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
	constructor(private readonly _userService: UserService) {}

	async validateUser(email: string, password: string): Promise<User> {
		const user = await this._userService.findOne(email);
		if (user) {
		}
		return true;
	}
}
