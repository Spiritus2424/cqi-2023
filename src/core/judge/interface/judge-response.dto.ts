import { Status, Token } from './submission.interface';

export interface JudgeSubmissionResponseDto {
	stdout: string;
	time: string;
	memory: string;
	stderr: string;
	token: Token;
	compile_output: string;
	message: string;
	status: Status;
	exitCode?: number;
	exitSignal?: number;
}
