/*
  Warnings:

  - You are about to drop the column `baseCode` on the `Problem` table. All the data in the column will be lost.
  - You are about to drop the `ProgrammingLanguage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Solution` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Solution" DROP CONSTRAINT "Solution_problemId_fkey";

-- DropForeignKey
ALTER TABLE "Solution" DROP CONSTRAINT "Solution_programmingLanguageId_fkey";

-- AlterTable
ALTER TABLE "Problem" DROP COLUMN "baseCode";

-- DropTable
DROP TABLE "ProgrammingLanguage";

-- DropTable
DROP TABLE "Solution";

-- CreateTable
CREATE TABLE "Compiler" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Compiler_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CodeTemplate" (
    "compilerId" INTEGER NOT NULL,
    "problemId" INTEGER NOT NULL,
    "template" TEXT NOT NULL,

    CONSTRAINT "CodeTemplate_pkey" PRIMARY KEY ("problemId","compilerId")
);

-- CreateTable
CREATE TABLE "CodeSolution" (
    "problemId" INTEGER NOT NULL,
    "compilerId" INTEGER NOT NULL,
    "solution" TEXT NOT NULL,

    CONSTRAINT "CodeSolution_pkey" PRIMARY KEY ("problemId","compilerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Compiler_name_key" ON "Compiler"("name");

-- AddForeignKey
ALTER TABLE "CodeTemplate" ADD CONSTRAINT "CodeTemplate_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeTemplate" ADD CONSTRAINT "CodeTemplate_compilerId_fkey" FOREIGN KEY ("compilerId") REFERENCES "Compiler"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeSolution" ADD CONSTRAINT "CodeSolution_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeSolution" ADD CONSTRAINT "CodeSolution_compilerId_fkey" FOREIGN KEY ("compilerId") REFERENCES "Compiler"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
