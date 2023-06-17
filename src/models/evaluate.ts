import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'
@Entity()
export class Evaluate extends BaseEntity {
  @PrimaryGeneratedColumn()
  idevaluate: number;
  @Column()
  name: string
  @Column()
  email: string
  @Column()
  comment: string

}