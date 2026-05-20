import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("RyDoc backend running");
});

app.listen(5050, () => {
  console.log("Server running on port 5050");
});