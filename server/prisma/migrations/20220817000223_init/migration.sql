/*
  Warnings:

  - You are about to drop the column `is_delete` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `is_delete` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Task` DROP COLUMN `is_delete`,
    ADD COLUMN `isDelete` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `is_delete`,
    ADD COLUMN `isDelete` BOOLEAN NULL DEFAULT false;
