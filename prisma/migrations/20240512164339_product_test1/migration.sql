-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "salesPrice" TEXT NOT NULL,
    "createdById" INTEGER
);
INSERT INTO "new_Product" ("category", "createdById", "description", "id", "name", "salesPrice") SELECT "category", "createdById", "description", "id", "name", "salesPrice" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
