import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { JudgeSubmissionResponseDto } from './interface/judge-response.dto';
import {
	Submission,
	SubmissionResponse,
} from './interface/submission.interface';

@Injectable()
export class JudgeService {
	private readonly JUDGE_URL: string;
	constructor(private readonly _httpService: HttpService) {
		this.JUDGE_URL = 'http://judge0-server:2358/';
	}

	async submitCode(
		submission: Submission,
		waitForResult = true,
	): Promise<SubmissionResponse> {
		return lastValueFrom(
			this._httpService
				.post<JudgeSubmissionResponseDto>(
					this.JUDGE_URL.concat('submissions').concat(`?wait=${waitForResult}`),
					{
						source_code: submission.sourceCode,
						language_id: submission.compilerId,
						expect_output: submission.expectedOutput,
						stdin: submission.stdin,
					},
				)
				.pipe(
					map((response) => response.data),
					map((data: JudgeSubmissionResponseDto): SubmissionResponse => {
						const { compile_output: compileOutput } = data;
						delete data.compile_output;
						return { compileOutput, ...data };
					}),
				),
		);
	}
}
