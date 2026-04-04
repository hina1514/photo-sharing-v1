import express from "express";
import apiRoutes from "./routes/apiRoutes.js";

export default function createApp() {
  const app = express();

  // Beginner-friendly CORS (useful if you hit the API directly in browser)
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
      res.sendStatus(204);
      return;
    }
    next();
  });

  app.use(apiRoutes);

  // Simple health endpoint
  app.get("/", (req, res) => {
    res.type("text").send("PhotoShare backend is running");
  });

  // 404 for everything else
  app.use((req, res) => {
    res.status(404).type("text").send("Not Found");
  });

  return app;
}
