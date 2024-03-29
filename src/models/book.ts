import { Entity, Column, BaseEntity, PrimaryGeneratedColumn,OneToOne } from 'typeorm'
@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
   idbook: number;
  @Column()
  whereto: string
  @Column()
  howmany: string
  @Column()
  arrivals: Date
  @Column()
  leaving: Date
}