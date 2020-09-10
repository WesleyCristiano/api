import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableListsSchoolsAndItem1599697857918 implements MigrationInterface {
    name = 'createTableListsSchoolsAndItem1599697857918'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schools" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address_id" uuid, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "REL_c64d9cf14d26a8b2497fe2f300" UNIQUE ("address_id"), CONSTRAINT "PK_95b932e47ac129dd8e23a0db548" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lists" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "school_id" uuid NOT NULL, "grade_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_268b525e9a6dd04d0685cb2aaaa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "items" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "list_id" uuid, "order_number" integer NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "items_categories" ("item_id" uuid NOT NULL, "category_id" uuid NOT NULL, CONSTRAINT "PK_2c124eb9a14e0590bf0bc9a76e0" PRIMARY KEY ("item_id", "category_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_acd27a6a1c9de7a798fb2e5bb8" ON "items_categories" ("item_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_195afdfb2068afb8ec33fabbff" ON "items_categories" ("category_id") `);
        await queryRunner.query(`ALTER TABLE "schools" ADD CONSTRAINT "FK_c64d9cf14d26a8b2497fe2f3005" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "lists" ADD CONSTRAINT "FK_241b8af8147e5c37269041b94d4" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE NO ACTION ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_9e792fa954394e5285d07f1e2ee" FOREIGN KEY ("list_id") REFERENCES "lists"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "items_categories" ADD CONSTRAINT "FK_acd27a6a1c9de7a798fb2e5bb82" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items_categories" ADD CONSTRAINT "FK_195afdfb2068afb8ec33fabbff8" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items_categories" DROP CONSTRAINT "FK_195afdfb2068afb8ec33fabbff8"`);
        await queryRunner.query(`ALTER TABLE "items_categories" DROP CONSTRAINT "FK_acd27a6a1c9de7a798fb2e5bb82"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_9e792fa954394e5285d07f1e2ee"`);
        await queryRunner.query(`ALTER TABLE "lists" DROP CONSTRAINT "FK_241b8af8147e5c37269041b94d4"`);
        await queryRunner.query(`ALTER TABLE "schools" DROP CONSTRAINT "FK_c64d9cf14d26a8b2497fe2f3005"`);
        await queryRunner.query(`DROP INDEX "IDX_195afdfb2068afb8ec33fabbff"`);
        await queryRunner.query(`DROP INDEX "IDX_acd27a6a1c9de7a798fb2e5bb8"`);
        await queryRunner.query(`DROP TABLE "items_categories"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`DROP TABLE "lists"`);
        await queryRunner.query(`DROP TABLE "schools"`);
    }

}
