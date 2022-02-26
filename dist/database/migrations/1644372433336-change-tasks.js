"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeTasks1644372433336 = void 0;
class changeTasks1644372433336 {
    constructor() {
        this.name = 'changeTasks1644372433336';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "task" ADD "creation_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "task" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "creation_at"`);
    }
}
exports.changeTasks1644372433336 = changeTasks1644372433336;
//# sourceMappingURL=1644372433336-change-tasks.js.map