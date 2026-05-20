import ReactMarkdown from "react-markdown";

const Message = ({ role, content }) => {
  return (
    <div
      className={`p-4 rounded-2xl mb-4 max-w-3xl ${
        role === "user"
          ? "bg-blue-600 ml-auto"
          : "bg-slate-800"
      }`}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Message;