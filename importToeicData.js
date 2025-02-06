const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const toeicData = require('./output.json');

const prisma = new PrismaClient();

async function importData() {
  for (const item of toeicData) {
    await prisma.toeiclist.create({
      data: {
        words: item.words,
        class: item.class,
        japanese: item.japanese,
        sentence: item.sentence,
        level: item.level,
        userNotes: item.userNotes || null, // 如果沒有筆記，將值設為 null
        category: item.category,
      },
    });
  }

  console.log('Data import complete!');
  await prisma.$disconnect();
}

importData()
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
