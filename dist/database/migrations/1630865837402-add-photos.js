"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPhotos1630865837402 = void 0;
class addPhotos1630865837402 {
    constructor() {
        this.name = 'addPhotos1630865837402';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "photo" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "profile_id" integer, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "photo" ADD CONSTRAINT "FK_31f2c69cd18b8442b80b546da31" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "photo" DROP CONSTRAINT "FK_31f2c69cd18b8442b80b546da31"`);
        await queryRunner.query(`DROP TABLE "photo"`);
    }
}
exports.addPhotos1630865837402 = addPhotos1630865837402;
//# sourceMappingURL=1630865837402-add-photos.js.map