import { IsNotEmpty, IsDefined, IsNumber } from 'class-validator';
import { SearchParams, SortParams } from '../../models/Experiment';
import { Column } from 'typeorm';

export class PaginatedParamsValidator {
  @IsNotEmpty()
  @IsNumber()
  @IsDefined()
  public skip: number;

  @IsNotEmpty()
  @IsNumber()
  @IsDefined()
  public take: number;

  @Column({ nullable: true })
  public searchParams: SearchParams;

  @Column({ nullable: true })
  public sortParams: SortParams[];
}