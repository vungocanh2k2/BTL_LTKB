import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'
@Entity()
export class Location extends BaseEntity {
  @PrimaryGeneratedColumn()
  idlocation: number;
  @Column()
  image: string
  @Column()
  location: string
  @Column()
  address: string
  @Column()
   evaluate: string
  @Column()
   price: string
   @Column()
   report: string
}