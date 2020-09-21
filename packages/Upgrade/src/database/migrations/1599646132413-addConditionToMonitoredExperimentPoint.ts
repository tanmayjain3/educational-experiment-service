import { MigrationInterface, QueryRunner } from 'typeorm';

// tslint:disable-next-line: class-name
export class addConditionToMonitoredExperimentPoint1599646132413 implements MigrationInterface {
    public name = 'addConditionToMonitoredExperimentPoint1599646132413';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monitored_experiment_point" ADD "condition" character varying`);
        await queryRunner.query(`ALTER TYPE "public"."experiment_error_type_enum" RENAME TO "experiment_error_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "experiment_error_type_enum" AS ENUM('Database not reachable', 'Database auth fail', 'Error in the assignment algorithm', 'Parameter missing in the client request', 'Parameter not in the correct format', 'User ID not found', 'Query Failed', 'Error reported from client', 'Experiment user not defined', 'Experiment user group not defined', 'Working group is not a subset of user group', 'Invalid token', 'Token is not present in request', 'Error in migration', 'Email send error')`);
        await queryRunner.query(`ALTER TABLE "experiment_error" ALTER COLUMN "type" TYPE "experiment_error_type_enum" USING "type"::"text"::"experiment_error_type_enum"`);
        await queryRunner.query(`DROP TYPE "experiment_error_type_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "experiment_error_type_enum_old" AS ENUM('Database not reachable', 'Database auth fail', 'Error in the assignment algorithm', 'Parameter missing in the client request', 'Parameter not in the correct format', 'User ID not found', 'Query Failed', 'Error reported from client', 'Experiment user not defined', 'Experiment user group not defined', 'Working group is not a subset of user group', 'Invalid token', 'Token is not present in request', 'Error in migration')`);
        await queryRunner.query(`ALTER TABLE "experiment_error" ALTER COLUMN "type" TYPE "experiment_error_type_enum_old" USING "type"::"text"::"experiment_error_type_enum_old"`);
        await queryRunner.query(`DROP TYPE "experiment_error_type_enum"`);
        await queryRunner.query(`ALTER TYPE "experiment_error_type_enum_old" RENAME TO  "experiment_error_type_enum"`);
        await queryRunner.query(`ALTER TABLE "monitored_experiment_point" DROP COLUMN "condition"`);
    }

}
