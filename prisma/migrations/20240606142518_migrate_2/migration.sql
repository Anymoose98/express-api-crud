/*
  Warnings:

  - You are about to drop the column `categoryId` on the `post` table. All the data in the column will be lost.
  - You are about to drop the `_posttotag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tags` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_posttotag` DROP FOREIGN KEY `_PostToTag_A_fkey`;

-- DropForeignKey
ALTER TABLE `_posttotag` DROP FOREIGN KEY `_PostToTag_B_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_categoryId_fkey`;

-- AlterTable
ALTER TABLE `post` DROP COLUMN `categoryId`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `tags` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_posttotag`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `tag`;
