import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

async function generate(prismaClient: PrismaClient): Promise<void> {
	await prismaClient.user.createMany({
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
}

export const UserSeed = {
	generate,
};
