/*
  Warnings:

  - You are about to drop the `Document` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Store` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_store_id_fkey";

-- DropTable
DROP TABLE "Document";

-- DropTable
DROP TABLE "Store";

-- CreateTable
CREATE TABLE "store" (
    "id" TEXT NOT NULL,
    "store_id" TEXT NOT NULL,
    "chat_api_key" TEXT,
    "workflow_api_key" TEXT,
    "system_prompt" TEXT,
    "store_prompt" TEXT,
    "icon_url" TEXT,
    "tone" TEXT,
    "blocking_keywords" TEXT,
    "dataset_id" TEXT,
    "chat_color" TEXT,
    "faq_content" TEXT,
    "meta_field_description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "store_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "store_store_id_key" ON "store"("store_id");

-- AddForeignKey
ALTER TABLE "document" ADD CONSTRAINT "document_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
