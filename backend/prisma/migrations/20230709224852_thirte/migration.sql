/*
  Warnings:

  - You are about to drop the column `hashToken` on the `refreshtoken` table. All the data in the column will be lost.
  - Added the required column `hashedToken` to the `RefreshToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `refreshtoken` DROP COLUMN `hashToken`,
    ADD COLUMN `hashedToken` VARCHAR(191) NOT NULL;
