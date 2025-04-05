import { Request, Response } from "express";
import { Point } from "../entities/Point";
import { AppDataSource } from "../db/data-source";

const pointRepo = AppDataSource.getRepository(Point);

export const createPoint = async (req: Request, res: Response) => {
  try {
    const { userId, amount } = req.body;
    const point = pointRepo.create({ userId, amount });
    const saved = await pointRepo.save(point);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to create point" });
  }
};

export const getPoints = async (req: Request, res: Response) => {
  try {
    const points = await pointRepo.find();
    res.json(points);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch points" });
  }
};
