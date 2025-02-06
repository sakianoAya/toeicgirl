-- CreateTable
CREATE TABLE "Toeiclist" (
    "id" SERIAL NOT NULL,
    "words" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "japanese" TEXT NOT NULL,
    "sentence" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "userNotes" TEXT,
    "category" TEXT NOT NULL,

    CONSTRAINT "Toeiclist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "wordId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Toeiclist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
