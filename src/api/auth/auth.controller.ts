import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/core/auth/auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly _authService: AuthService) {}

	@Post('login')
	async login(@Body() loginDto: LoginDto) {
		this._authService.validateUser(loginDto.email, loginDto.password);
	}
}
