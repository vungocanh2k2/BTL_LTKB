import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'
@Entity()
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  idcontact: number;
  @Column()
  name: string
  @Column()
  email: string
  @Column()
  number: number
  @Column()
  subject: string
  @Column()
  message: string

}