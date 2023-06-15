import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'
@Entity()
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  idservice:number;
  @Column()
  nameservice: string
  @Column()
  iconservice: string
  @Column()
  service: string
}
