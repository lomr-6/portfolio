import express from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import { helmetMiddleware } from "./middlewares/helmet.js";
import { rateLimitMiddleware } from "./middlewares/rateLimit.js";
import projectsRoutes from "./routes/projects.routes.js";

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(helmetMiddleware);
app.use(corsMiddleware);
app.use(rateLimitMiddleware);

app.use("/api", projectsRoutes);

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
