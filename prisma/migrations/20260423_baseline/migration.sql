-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'EDITOR', 'VIEWER');

-- CreateTable
CREATE TABLE "admin_users" (
    "id" TEXT NOT NULL,
    "supabaseId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'VIEWER',
    "permissions" TEXT[],
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastLogin" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "characters" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "powers" TEXT[],
    "powerIcons" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "description" TEXT NOT NULL,
    "fullDescription" TEXT NOT NULL,
    "priceInCents" INTEGER NOT NULL,
    "coverImage" TEXT NOT NULL,
    "accentColor" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "pages" INTEGER NOT NULL,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookCharacters" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_BookCharacters_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_users_supabaseId_key" ON "admin_users"("supabaseId");

-- CreateIndex
CREATE UNIQUE INDEX "admin_users_email_key" ON "admin_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "characters_slug_key" ON "characters"("slug");

-- CreateIndex
CREATE INDEX "_BookCharacters_B_index" ON "_BookCharacters"("B");

-- AddForeignKey
ALTER TABLE "_BookCharacters" ADD CONSTRAINT "_BookCharacters_A_fkey" FOREIGN KEY ("A") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookCharacters" ADD CONSTRAINT "_BookCharacters_B_fkey" FOREIGN KEY ("B") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

