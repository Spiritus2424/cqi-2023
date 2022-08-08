import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/core/user/user.service';
import { UserDto } from './dto/user.dto';

@ApiTags('User')
@Controller('users')
export class UserController {
	constructor(private readonly _userService: UserService) {}

	@ApiOkResponse({ type: UserDto })
	@Get(':id')
	async findOne(@Param('id') id: number): Promise<UserDto> {
		return this._userService.findOneById(id);
	}
}
