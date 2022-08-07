import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/core/user/user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
	constructor(private readonly _userService: UserService) {}

	@Post()
	createUser(@Body() user: CreateUserDto) {
		return this._userService.create({ id: undefined, ...user });
	}
}
