import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    data: "Hellow World!",
  });
});

export default app;
