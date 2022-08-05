import { Compiler } from '@prisma/client';

export type Token = string;

export interface Submission {
	sourceCode: string | File;
	compilerId: number | Compiler;
	stdin?: string;
	expectedOutput?: string;
	callbackUrl?: string;
}

export interface SubmissionResult {
	stdout: string;
	stderr: string;
	token: Token;
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
