import axios from "axios";

export const askOllama = async (prompt) => {
  const response = await axios.post(
    "http://localhost:11434/api/generate",
    {
      model: "qwen2.5:7b",
      prompt,
      stream: false,
    }
  );

  return response.data.response;
};