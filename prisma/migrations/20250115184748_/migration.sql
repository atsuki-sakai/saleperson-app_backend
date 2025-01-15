/*
  Warnings:

  - You are about to drop the column `created_at` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `store_id` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `blocking_keywords` on the `store` table. All the data in the column will be lost.
  - You are about to drop the column `chat_api_key` on the `store` table. All the data in the column will be lost.
  - You are about to drop the column `chat_color` on the `store` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `store` table. All the data in the column will be lost.
  - You are about to drop the column `dataset_id` on the `store` table. All the data in the column will be lost.
  - You are about to drop the column `faq_content` on the `store` table. All the data in the column will be lost.
  - You are about to drop the column `icon_url` on the `store` table. All the data in the column will be lost.
  - You are about to drop the column `meta_field_description` on the `store` table. All the data in the column will be lost.
  - You are about to drop the column `store_id` on the `store` table. All the data in the column will be lost.
  - You are about to drop the column `store_prompt` on the `store` table. All the data in the column will be lost.
  - You are about to drop the column `system_prompt` on the `store` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `store` table. All the data in the column will be lost.
  - You are about to drop the column `workflow_api_key` on the `store` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[storeId]` on the table `store` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `storeId` to the `document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeId` to the `store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `store` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "document" DROP CONSTRAINT "document_store_id_fkey";

-- DropIndex
DROP INDEX "store_store_id_key";

-- AlterTable
ALTER TABLE "document" DROP COLUMN "created_at",
DROP COLUMN "store_id",
DROP COLUMN "text",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "datasetId" TEXT,
ADD COLUMN     "storeId" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "store" DROP COLUMN "blocking_keywords",
DROP COLUMN "chat_api_key",
DROP COLUMN "chat_color",
DROP COLUMN "created_at",
DROP COLUMN "dataset_id",
DROP COLUMN "faq_content",
DROP COLUMN "icon_url",
DROP COLUMN "meta_field_description",
DROP COLUMN "store_id",
DROP COLUMN "store_prompt",
DROP COLUMN "system_prompt",
DROP COLUMN "updated_at",
DROP COLUMN "workflow_api_key",
ADD COLUMN     "blockingKeywords" TEXT,
ADD COLUMN     "chatApiKey" TEXT,
ADD COLUMN     "chatColor" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "datasetId" TEXT,
ADD COLUMN     "faqContent" TEXT,
ADD COLUMN     "iconUrl" TEXT,
ADD COLUMN     "metaFieldDescription" TEXT,
ADD COLUMN     "storeId" TEXT NOT NULL,
ADD COLUMN     "storePrompt" TEXT,
ADD COLUMN     "systemPrompt" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "workflowApiKey" TEXT;

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "scope" TEXT,
    "expires" TIMESTAMP(6),
    "accessToken" TEXT NOT NULL,
    "userId" BIGINT,
    "accountOwner" BOOLEAN NOT NULL DEFAULT false,
    "collaborator" BOOLEAN DEFAULT false,
    "email" TEXT,
    "emailVerified" BOOLEAN DEFAULT false,
    "firstName" TEXT,
    "lastName" TEXT,
    "locale" TEXT,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "session_shop_idx" ON "session"("shop");

-- CreateIndex
CREATE INDEX "document_storeId_idx" ON "document"("storeId");

-- CreateIndex
CREATE UNIQUE INDEX "store_storeId_key" ON "store"("storeId");

-- CreateIndex
CREATE INDEX "store_storeId_idx" ON "store"("storeId");

-- AddForeignKey
ALTER TABLE "document" ADD CONSTRAINT "document_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "store"("storeId") ON DELETE RESTRICT ON UPDATE CASCADE;
