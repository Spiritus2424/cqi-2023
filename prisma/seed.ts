import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	console.log('Seeding ...');
	await prisma.compiler.createMany({
		data: [
			{ id: 0, name: 'Java' },
			{ id: 1, name: 'C#' },
			{ id: 2, name: 'C' },
			{ id: 3, name: 'C++' },
		],
		skipDuplicates: true,
	});

	await prisma.problem.createMany({
		data: [
			{
				id: 0,
				name: 'Two Sum',
				description: 'Blablabla',
			},
		],
		skipDuplicates: true,
	});

	await prisma.codeTemplate.createMany({
		data: [
			{
				compilerId: 0,
				problemId: 0,
				template: `class Solution {
					public int[] twoSum(int[] nums, int target) {

					}
				}`,
			},
		],
		skipDuplicates: true,
	});
	console.log('Completed!');
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
