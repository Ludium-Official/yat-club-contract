// src/services/pointService.ts
import { AppDataSource } from "../db/data-source"
import { Point } from "../entities/Point"

export const givePoint = async (userId: string, amount: number) => {
  const repo = AppDataSource.getRepository(Point)
  const point = new Point()
  point.userId = userId
  point.amount = amount
  return await repo.save(point)
}
