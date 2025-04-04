/*
  Warnings:

  - Added the required column `cart` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Projects` ADD COLUMN `cart` BOOLEAN DEFAULT false NOT NULL;
