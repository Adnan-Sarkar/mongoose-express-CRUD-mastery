import express from "express";
import cors from "cors";
import { UserRoutes } from "./app/modules/user/user.route";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api", UserRoutes);

export default app;
