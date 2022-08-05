import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import {
	JudgeSubmissionResult,
	Submission,
	SubmissionResult,
} from './interface/submission.interface';

@Injectable()
export class JudgeService {
	private readonly JUDGE_URL: string;
	constructor(private readonly _httpService: HttpService) {
		this.JUDGE_URL = 'http://judge0-server:2358/';
	}

	async submitCode(
		submission: Submission,
		waitForResult = false,
	): Promise<SubmissionResult> {
		return lastValueFrom(
			this._httpService
				.post<JudgeSubmissionResult>(
					this.JUDGE_URL.concat('submissions').concat(`?wait=${waitForResult}`),
					{
						source_code: submission.sourceCode,
						language_id: submission.compilerId,
						expect_output: submission.expectedOutput,
						stdin: submission.stdin,
						callback_url: submission.callbackUrl,
					},
				)
				.pipe(
					map((response) => response.data),
					map((data): SubmissionResult => {
						const { compile_output: compileOutput } = data;
						delete data.compile_output;
						return { compileOutput, ...data };
					}),
				),
		);

		// return '';
	}
}
