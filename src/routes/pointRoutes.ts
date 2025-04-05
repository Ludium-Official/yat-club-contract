import express from "express"
import { AppDataSource } from "../db/data-source"
import { Point } from "../entities/Point"

const router = express.Router()

router.post("/", async (req, res) => {
  const { userId, amount } = req.body

  const pointRepo = AppDataSource.getRepository(Point)
  const point = pointRepo.create({ userId, amount })

  await pointRepo.save(point)

  res.json(point)
})

export default router
