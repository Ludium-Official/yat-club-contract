import "reflect-metadata"
import express from "express";
import { AppDataSource } from "./db/data-source";
import { Point } from "./entities/Point";

const app = express();
app.use(express.json());

app.post("/points", async (req, res) => {
  const { userId, amount } = req.body;
  try {
    const point = new Point();
    point.userId = userId;
    point.amount = amount;
    await AppDataSource.manager.save(point);
    res.status(201).json(point);
  } catch (error) {
    res.status(500).json({ error: "Failed to save point", detail: error });
  }
});

app.get("/points", async (req, res) => {
  const points = await AppDataSource.manager.find(Point);
  res.json(points);
});

AppDataSource.initialize().then(() => {
  app.listen(3000, () => {
    console.log("🚀 Server is running at http://localhost:3000");
  });
});
