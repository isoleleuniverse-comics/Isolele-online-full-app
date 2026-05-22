-- CreateTable
CREATE TABLE `Article` (
    `id` VARCHAR(191) NOT NULL,
    `translationGroupId` VARCHAR(191) NOT NULL,
    `locale` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `excerpt` VARCHAR(191) NULL,
    `coverImage` VARCHAR(191) NULL,
    `blocksJson` JSON NOT NULL,
    `status` ENUM('DRAFT', 'REVIEW', 'PUBLISHED', 'ARCHIVED') NOT NULL DEFAULT 'DRAFT',
    `seoTitle` VARCHAR(191) NULL,
    `seoDescription` VARCHAR(191) NULL,
    `publishedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Article_slug_key`(`slug`),
    INDEX `Article_translationGroupId_idx`(`translationGroupId`),
    INDEX `Article_locale_idx`(`locale`),
    INDEX `Article_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
