/*
  Warnings:

  - A unique constraint covering the columns `[folderName]` on the table `Folder` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Folder_folderName_key" ON "Folder"("folderName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
