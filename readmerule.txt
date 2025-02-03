npx tsx src/seed.ts
//導入資料

npx prisma studio
//使用 Prisma Studio 查看資料

npx prisma generate
//每次你修改 Prisma schema，或是執行遷移，都需要重新生成 Prisma Client，這樣才能確保代碼與資料庫同步。

npx prisma migrate dev --name <migration_name>
當你修改了 Prisma schema 文件並添加新的模型或字段時，可以使用這個命令來生成並應用遷移。

npx prisma migrate status
查看已經應用的所有遷移。

npx prisma migrate reset
如果你需要撤銷最近一次的遷移（例如因為錯誤或問題），可以使用：