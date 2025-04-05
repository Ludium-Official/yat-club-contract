import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Point {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "varchar" })
  userId: string

  @Column({ type: "int" })
  amount: number
}
