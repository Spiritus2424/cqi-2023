import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { Submission, Token } from '../interface/submission.interface';

@Injectable()
export class JudgeService {
	private readonly JUDGE_URL: string;
	constructor(private readonly _httpService: HttpService) {
		this.JUDGE_URL = 'http://localhost:2358';
	}

	async submitCode(submission: Submission): Promise<Token> {
		return (
			await lastValueFrom(
				this._httpService.post<Token>(this.JUDGE_URL, submission),
			)
		).data;
	}
}
