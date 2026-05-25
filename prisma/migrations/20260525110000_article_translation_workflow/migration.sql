ALTER TABLE `Article`
    ADD COLUMN `translationStatus` ENUM('DRAFT', 'TRANSLATED', 'REVIEWING', 'UP_TO_DATE', 'NEEDS_UPDATE') NOT NULL DEFAULT 'UP_TO_DATE',
    ADD COLUMN `sourceVersion` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `translatedFromVersion` INTEGER NULL;

UPDATE `Article`
SET
    `translationStatus` = CASE
        WHEN `locale` = 'en' THEN 'UP_TO_DATE'
        ELSE 'TRANSLATED'
    END,
    `translatedFromVersion` = CASE
        WHEN `locale` = 'en' THEN `sourceVersion`
        ELSE 1
    END;

CREATE INDEX `Article_translationStatus_idx` ON `Article`(`translationStatus`);
CREATE UNIQUE INDEX `Article_translationGroupId_locale_key` ON `Article`(`translationGroupId`, `locale`);
