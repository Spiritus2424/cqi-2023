import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';
import { AuthService } from 'src/core/auth/auth.service';
import { Roles } from 'src/core/auth/decorator/role.decorator';
import { JwtAuthGuard } from 'src/core/auth/guard/jwt-auth.guard';
import { LocalAuthGuard } from 'src/core/auth/guard/local-auth.guard';
import { LoginResponseDto } from './dto/login.dto';
import { SignUpDto, SignUpResponseDto } from './dto/sign-up.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
	constructor(private readonly _authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Request() request: Express.Request): Promise<LoginResponseDto> {
		console.log(request.user);
		return {
			accessToken: await this._authService.login(request.user as User),
		};
	}

	@ApiCreatedResponse({ type: SignUpResponseDto })
	@UseGuards(JwtAuthGuard)
	@Roles(Role.ADMIN, Role.STUDENT_PLUS)
	@Post('sign-up')
	async signUp(@Body() newUser: SignUpDto): Promise<SignUpResponseDto> {
		return this._authService.signUp({ id: undefined, ...newUser });
	}
}
