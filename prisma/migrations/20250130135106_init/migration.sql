/*
  Warnings:

  - You are about to drop the `Vocabulary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Vocabulary";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Word" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "words" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "japanese" TEXT NOT NULL,
    "sentence" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "userNotes" TEXT,
    "category" TEXT NOT NULL
);
