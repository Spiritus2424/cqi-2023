import { Controller, Get, Redirect } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller()
export class OpenApiController {
	@Get()
	@Redirect('http://localhost:3000/api', 302)
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	getDocs(): void {}
}
