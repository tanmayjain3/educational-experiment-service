import { Entity, PrimaryColumn, Column } from 'typeorm';
import { BaseModel } from './base/BaseModel';
import { IsNotEmpty, IsObject, IsDefined } from 'class-validator';

@Entity()
export class ExperimentUser extends BaseModel {
  @PrimaryColumn()
  @IsNotEmpty()
  @IsDefined()
  public id: string;

  @Column({ type: 'json' })
  @IsDefined()
  @IsObject()
  public group: object;

  @Column({ type: 'json', nullable: true })
  public workingGroup: object | undefined;
}
