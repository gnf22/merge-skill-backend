import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateApplicants1616645929637 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'applicants',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'biography',
            type: 'varchar',
          },
          {
            name: 'telephone',
            type: 'varchar',
          },
          {
            name: 'dateOfBirth',
            type: 'timestamp',
          },
          {
            name: 'schooling',
            type: 'enum',
            enum: ['Fundamental', 'Médio', 'Superior'],
            enumName: 'schoolingEnum',
          },
          {
            name: 'isWorking',
            type: 'boolean',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'userId',
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('applicants');
  }
}
