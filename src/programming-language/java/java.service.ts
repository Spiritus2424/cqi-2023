import { Injectable } from '@nestjs/common';
import { spawnSync } from 'child_process';

@Injectable()
export class JavaService {
	run(filename: string): void {
		const childProcess = spawnSync('java', ['-jar', filename]);
	}
}
