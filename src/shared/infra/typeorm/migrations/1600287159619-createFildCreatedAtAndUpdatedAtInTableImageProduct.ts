import {MigrationInterface, QueryRunner} from "typeorm";

export class createFildCreatedAtAndUpdatedAtInTableImageProduct1600287159619 implements MigrationInterface {
    name = 'createFildCreatedAtAndUpdatedAtInTableImageProduct1600287159619'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images_products" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "images_products" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images_products" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "images_products" DROP COLUMN "created_at"`);
    }

}
