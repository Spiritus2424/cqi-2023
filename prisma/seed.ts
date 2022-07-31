import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	console.log('Seeding ...');
	await prisma.programmingLanguage.createMany({
		data: [
			{ id: 0, name: 'Java' },
			{ id: 1, name: 'C#' },
			{ id: 2, name: 'C' },
			{ id: 3, name: 'C++' },
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
