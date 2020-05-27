import { BaseModel } from './base/BaseModel';
import { Entity, Column, ManyToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Metric } from './Metric';
import { ExperimentUser } from './ExperimentUser';

@Entity()
export class Log extends BaseModel {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column('jsonb')
  public data: any;

  @ManyToMany((type) => Metric, (metric) => metric.logs)
  public metrics: Metric[];

  @ManyToOne((type) => ExperimentUser, (user) => user.logs)
  public user: ExperimentUser;
}
