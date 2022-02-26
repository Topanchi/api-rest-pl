"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories1632778735431 = void 0;
class categories1632778735431 {
    constructor() {
        this.name = 'categories1632778735431';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tasks_categories" ("task_id" integer NOT NULL, "category_id" integer NOT NULL, CONSTRAINT "PK_bd37bb79563c4a1afff75b74017" PRIMARY KEY ("task_id", "category_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6147e13ad964c3183edc5af465" ON "tasks_categories" ("task_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_037f513e033de7828af45478fc" ON "tasks_categories" ("category_id") `);
        await queryRunner.query(`ALTER TABLE "tasks_categories" ADD CONSTRAINT "FK_6147e13ad964c3183edc5af4658" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tasks_categories" ADD CONSTRAINT "FK_037f513e033de7828af45478fc3" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "tasks_categories" DROP CONSTRAINT "FK_037f513e033de7828af45478fc3"`);
        await queryRunner.query(`ALTER TABLE "tasks_categories" DROP CONSTRAINT "FK_6147e13ad964c3183edc5af4658"`);
        await queryRunner.query(`DROP INDEX "IDX_037f513e033de7828af45478fc"`);
        await queryRunner.query(`DROP INDEX "IDX_6147e13ad964c3183edc5af465"`);
        await queryRunner.query(`DROP TABLE "tasks_categories"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }
}
exports.categories1632778735431 = categories1632778735431;
//# sourceMappingURL=1632778735431-categories.js.map