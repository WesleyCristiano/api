import {MigrationInterface, QueryRunner} from "typeorm";

export class createImageProductTable1600278716982 implements MigrationInterface {
    name = 'createImageProductTable1600278716982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "images_products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_id" uuid NOT NULL, "file_name" character varying NOT NULL, CONSTRAINT "PK_a49378fa6357c024bf76ea12f4d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "images_products" ADD CONSTRAINT "FK_e8f96ef54b6fd15a18fa2b7f2eb" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images_products" DROP CONSTRAINT "FK_e8f96ef54b6fd15a18fa2b7f2eb"`);
        await queryRunner.query(`DROP TABLE "images_products"`);
    }

}
