import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { Submission, Token } from './interface/submission.interface';

@Injectable()
export class JudgeService {
	private readonly JUDGE_URL: string;
	constructor(private readonly _httpService: HttpService) {
		this.JUDGE_URL = 'http://judge0-server:2358/';
	}

	async submitCode(submission: Submission): Promise<Token> {
		return (
			await lastValueFrom(
				this._httpService.post<Token>(this.JUDGE_URL.concat('submissions'), {
					source_code: submission.sourceCode,
					language_id: submission.compilerId,
					callback_url: submission.callbackUrl,
				}),
			)
		).data;
	}
}
