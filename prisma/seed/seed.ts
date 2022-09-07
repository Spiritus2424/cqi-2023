import { PrismaClient } from '@prisma/client';
import { CodeSolutionSeed } from './code-solution/code-solution';
import { CodeTemplateSeed } from './code-template/code-template';
import { CompilerSeed } from './compiler/compiler';
import { ProblemSeed } from './problem/problem';
import { SchoolSeed } from './school/school';
import { SimpleProblemSeed } from './simple-problem/simple-problem';
import { UserSeed } from './user/user';

const prismaClient = new PrismaClient();

async function main() {
	console.log('Seeding ...');
	await SimpleProblemSeed.generate(prismaClient);
	await SchoolSeed.generate(prismaClient);
	await UserSeed.generate(prismaClient);
	await CompilerSeed.generate(prismaClient);
	await ProblemSeed.generate(prismaClient);
	await CodeTemplateSeed.generate(prismaClient);
	await CodeSolutionSeed.generate(prismaClient);
	console.log('Completed!');
}

main()
	.then(async () => {
		await prismaClient.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prismaClient.$disconnect();
		process.exit(1);
	});
