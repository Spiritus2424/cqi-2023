import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
	console.log('Seeding ...');
	await prisma.school.createMany({
		data: [
			{ id: 0, name: 'Concordia' },
			{ id: 1, name: 'McGill' },
			{ id: 2, name: 'Polytechnique Montreal' },
		],
		skipDuplicates: true,
	});

	await prisma.user.createMany({
		data: [
			{
				email: 'ahmad.faour@polymtl.ca',
				firstName: 'Ahmad',
				lastName: 'Faour',
				password: await bcrypt.hash(
					'NotMyRealPassword',
					await bcrypt.genSalt(),
				),
				role: Role.ADMIN,
				schoolId: 2,
			},
		],
		skipDuplicates: true,
	});

	await prisma.compiler.createMany({
		data: [
			{ id: 62, name: 'Java (OpenJDK 13.0.1)' },
			{ id: 51, name: 'C# (Mono 6.6.0.161)' },
			{ id: 48, name: 'C (GCC 7.4.0)' },
			{ id: 52, name: 'C++ (GCC 7.4.0)' },
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
				compilerId: 62,
				problemId: 0,
				template: `
class Solution {
	public int[] twoSum(int[] nums, int target) {

	}
}`,
			},
		],
		skipDuplicates: true,
	});

	await prisma.codeSolution.createMany({
		data: [
			{
				compilerId: 62,
				problemId: 0,
				solution: `
import java.util.Arrays;
class Main {
	public static void main(String args[])
	{
		Solution solution = new Solution();
		int[] nums = {1, 2, 3};
		int target = 3;
		int[] answer = {0,1};
		int[] response = solution.twoSum(nums, target);
		if(Arrays.equals(response, answer)) {
			System.exit(0);
		} else {
			System.exit(1);
		}
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
