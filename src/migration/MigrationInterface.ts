import {QueryRunner} from "../query-runner/QueryRunner";

/**
 * Migrations should implement this interface and all its methods.
 */
export interface MigrationInterface {

    /**
     * Return the migration name.
     *
     * Migration class name should have a UNIX timestamp appended.
     * If the method is not implemented, the name of the class will be used.
     */
    getMigrationName?(): string;

    /**
     * Run the migrations.
     */
    up(queryRunner: QueryRunner): Promise<any>;

    /**
     * Reverse the migrations.
     */
    down(queryRunner: QueryRunner): Promise<any>;

}