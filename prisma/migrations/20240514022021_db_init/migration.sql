-- CreateEnum
CREATE TYPE "PersonType" AS ENUM ('USER', 'CLIENT');

-- CreateEnum
CREATE TYPE "MoviePersonType" AS ENUM ('DIRECTOR', 'ACTOR');

-- CreateEnum
CREATE TYPE "RentalStatus" AS ENUM ('REGULAR', 'DELAYED', 'DELIVERED');

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "avatar" TEXT,
    "email" TEXT NOT NULL,
    "type" "PersonType" NOT NULL,
    "full_name" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MoviePerson" (
    "id" SERIAL NOT NULL,
    "type" "MoviePersonType" NOT NULL,
    "avatar" TEXT,
    "full_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MoviePerson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "release_year" INTEGER NOT NULL,
    "featured_image" TEXT,
    "thumb_image" TEXT,
    "synopsis" TEXT,
    "rental_value" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieCast" (
    "id" SERIAL NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "person_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MovieCast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieStock" (
    "id" SERIAL NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MovieStock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rental" (
    "id" SERIAL NOT NULL,
    "withdrawal_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delivery_at" TIMESTAMP(3),
    "due_at" TIMESTAMP(3) NOT NULL,
    "late_fee" DOUBLE PRECISION NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "status" "RentalStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "renter_id" INTEGER NOT NULL,
    "movie_stock_id" INTEGER NOT NULL,

    CONSTRAINT "Rental_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");

-- CreateIndex
CREATE INDEX "Person_full_name_idx" ON "Person"("full_name");

-- CreateIndex
CREATE INDEX "Person_type_idx" ON "Person"("type");

-- CreateIndex
CREATE UNIQUE INDEX "MoviePerson_full_name_key" ON "MoviePerson"("full_name");

-- CreateIndex
CREATE INDEX "MoviePerson_full_name_idx" ON "MoviePerson"("full_name");

-- CreateIndex
CREATE INDEX "MoviePerson_type_idx" ON "MoviePerson"("type");

-- CreateIndex
CREATE INDEX "Category_name_idx" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_title_key" ON "Movie"("title");

-- CreateIndex
CREATE INDEX "Movie_category_id_idx" ON "Movie"("category_id");

-- CreateIndex
CREATE INDEX "MovieCast_movie_id_idx" ON "MovieCast"("movie_id");

-- CreateIndex
CREATE INDEX "MovieCast_person_id_idx" ON "MovieCast"("person_id");

-- CreateIndex
CREATE INDEX "MovieStock_movie_id_idx" ON "MovieStock"("movie_id");

-- CreateIndex
CREATE INDEX "Rental_movie_stock_id_idx" ON "Rental"("movie_stock_id");

-- CreateIndex
CREATE INDEX "Rental_renter_id_idx" ON "Rental"("renter_id");

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieCast" ADD CONSTRAINT "MovieCast_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieCast" ADD CONSTRAINT "MovieCast_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "MoviePerson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieStock" ADD CONSTRAINT "MovieStock_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_renter_id_fkey" FOREIGN KEY ("renter_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_movie_stock_id_fkey" FOREIGN KEY ("movie_stock_id") REFERENCES "MovieStock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
