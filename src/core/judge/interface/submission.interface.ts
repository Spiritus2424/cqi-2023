export type Token = string;

export interface Submission {
	sourceCode: string;
	compilerId: number;
	stdin?: string;
	expectedOutput?: string;
}

export interface Status {
	id: number;
	description: string;
}

export interface SubmissionResponse {
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
