import express, { Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./app/modules/user/user.route";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api", UserRoutes);

// welcome route

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Mongoose Express CRUD API",
    details: "For API details, visit /api/users",
    documentation:
      "For detailed documentation, visit: https://github.com/Adnan-Sarkar/mongoose-express-CRUD-mastery",
  });
});

export default app;
