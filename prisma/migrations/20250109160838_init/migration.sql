-- CreateTable
CREATE TABLE "stores" (
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

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documents" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "store_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stores_store_id_key" ON "stores"("store_id");

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
