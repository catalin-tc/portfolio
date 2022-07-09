import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'Users'
})
export class ChorisimoUser {

  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({
    unique: true,
    length: 100,
    nullable: false
  })
  public email!: string;

  @Column({
    unique: true,
    length: 50,
    nullable: false
  })
  public nickname!: string;

  @Column({
    nullable: false
  })
  public password!: string;
}
