/*
  Warnings:

  - You are about to drop the column `problem` on the `Problem` table. All the data in the column will be lost.
  - Added the required column `baseCode` to the `Problem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Problem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Problem" DROP COLUMN "problem",
ADD COLUMN     "baseCode" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;
