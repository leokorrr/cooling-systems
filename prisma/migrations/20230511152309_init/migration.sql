-- CreateTable
CREATE TABLE "StorageItem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "StorageItem_pkey" PRIMARY KEY ("id")
);
