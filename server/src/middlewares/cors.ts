import cors from "cors";

const ALLOWED_ORIGIN = process.env.CLIENT_ORIGIN ?? "http://localhost:5173";

export const corsMiddleware = cors({
  origin: ALLOWED_ORIGIN,
  methods: ["GET"],
});
