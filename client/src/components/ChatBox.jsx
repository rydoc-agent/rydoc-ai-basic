import { useState } from "react";
import axios from "axios";
import Message from "./Message";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5050/api/chat",
        {
          message: input,
        }
      );

      const aiMessage = {
        role: "assistant",
        content: res.data.response,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.log(error);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        RyDoc AI
      </h1>

      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <Message
            key={index}
            role={msg.role}
            content={msg.content}
          />
        ))}

        {loading && (
          <div className="bg-slate-800 p-4 rounded-2xl w-fit">
            Thinking...
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) {
              sendMessage();
            }
          }}
          className="flex-1 bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
          placeholder="Ask RyDoc AI anything..."
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;