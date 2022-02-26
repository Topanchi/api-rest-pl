"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1629071635961 = void 0;
class init1629071635961 {
    constructor() {
        this.name = 'init1629071635961';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "completed" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "task"`);
    }
}
exports.init1629071635961 = init1629071635961;
//# sourceMappingURL=1629071635961-init.js.map