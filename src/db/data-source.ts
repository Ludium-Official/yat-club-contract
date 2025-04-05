import "reflect-metadata"
import { DataSource } from "typeorm"
import { Point } from "../entities/Point"


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  synchronize: true,
  logging: true,
  entities: [Point],
})
