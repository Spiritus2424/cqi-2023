import { ProgrammingLanguage } from '@prisma/client';

export type Token = string;

export interface Submission {
	sourceCode: string | File;
	languageId: number | ProgrammingLanguage;
	stdin?: string;
	expectedOutput?: string;
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
