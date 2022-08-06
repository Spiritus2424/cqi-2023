export type Token = string;

export interface Submission {
	sourceCode: string;
	compilerId: number;
	stdin?: string;
	expectedOutput?: string;
}

export interface SubmissionResult {
	token: Token;
	stdout: string;
	stderr: string;
	status: Status;
	compileOutput: string;
	message: string;
	time: string;
	memory: string;
	exitCode?: number;
	exitSignal?: number;
}

export interface Status {
	id: number;
	description: string;
}

export interface JudgeSubmissionResult {
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
