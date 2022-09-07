import { PrismaClient } from '@prisma/client';

async function generate(prismaClient: PrismaClient): Promise<void> {
	await prismaClient.compiler.createMany({
		data: [
			{ id: 62, name: 'Java (OpenJDK 13.0.1)' },
			{ id: 51, name: 'C# (Mono 6.6.0.161)' },
			{ id: 48, name: 'C (GCC 7.4.0)' },
			{ id: 52, name: 'C++ (GCC 7.4.0)' },
		],
		skipDuplicates: true,
	});
}

export const CompilerSeed = {
	generate,
};
