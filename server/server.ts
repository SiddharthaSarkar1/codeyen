import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import userRouter from "./routes/userRoutes.js";
import projectRouter from "./routes/projectRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

const corsOptions = {
    origin: process.env.TRUSTED_ORIGINS?.split(',') || [],
    credentials: true
}

//Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.get("/healthz", (req: Request, res: Response) => {
    res.json({ status: "OK"})
})

app.get("/", (req: Request, res: Response) => {
    res.json({ status: "OK", message: "Server is live now." });
});

app.use("/api/user", userRouter);
app.use("/api/project", projectRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
