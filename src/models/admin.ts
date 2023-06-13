import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id :number;
  @Column()
  nameadmin: string
  @Column()
  email: string
  @Column()
  password: string
}
