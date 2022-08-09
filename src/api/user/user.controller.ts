import {
	ClassSerializerInterceptor,
	Controller,
	Get,
	NotFoundException,
	Param,
	UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/core/user/user.service';
import { UserDto } from './dto/user.dto';

@ApiTags('User')
@Controller('users')
export class UserController {
	constructor(private readonly _userService: UserService) {}

	@UseInterceptors(ClassSerializerInterceptor)
	@ApiOkResponse({ type: UserDto })
	@Get(':id')
	async findOne(@Param('id') id: number): Promise<UserDto> {
		let user: UserDto;
		try {
			user = new UserDto(await this._userService.findOneById(id));
		} catch (error) {
			throw new NotFoundException({
				message: 'User Not Found.',
			});
		}

		return user;
	}
}
