-- CreateTable
CREATE TABLE "ProgrammingLanguage" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ProgrammingLanguage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Problem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "problem" TEXT NOT NULL,

    CONSTRAINT "Problem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Solution" (
    "problemId" INTEGER NOT NULL,
    "programmingLanguageId" INTEGER NOT NULL,
    "solution" TEXT NOT NULL,

    CONSTRAINT "Solution_pkey" PRIMARY KEY ("problemId","programmingLanguageId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProgrammingLanguage_name_key" ON "ProgrammingLanguage"("name");

-- AddForeignKey
ALTER TABLE "Solution" ADD CONSTRAINT "Solution_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solution" ADD CONSTRAINT "Solution_programmingLanguageId_fkey" FOREIGN KEY ("programmingLanguageId") REFERENCES "ProgrammingLanguage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
