import express from "express";
import { askOllama } from "../services/ollama.js";
import { webSearch } from "../services/search.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const searchResults = await webSearch(message);

    const prompt = `
You are RyDoc AI.

Latest web information:
${searchResults}

User question:
${message}
`;

    const response = await askOllama(prompt);

    res.json({ response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;