-- CreateTable
CREATE TABLE "Vocabulary" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "words" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "japanese" TEXT NOT NULL,
    "sentence" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "userNotes" TEXT,
    "category" TEXT NOT NULL
);
