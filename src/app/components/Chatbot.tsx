"use client";
import { useState, useEffect, useRef } from "react";
import { Bot, X } from "lucide-react"; // Using Lucide Icons

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [responses, setResponses] = useState<{ text: string; isUser: boolean }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) restartChat();
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [responses]);

  const restartChat = async () => {
    setResponses([]);
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chatbot");
      if (!res.ok) throw new Error("Failed to fetch chatbot start message");
      const data = await res.json();
      setResponses([{ text: data.response, isUser: false }]);
      setOptions(data.options || []);
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOptionClick = async (option: string) => {
    const userMessage = { text: option, isUser: true };
    setResponses((prev) => [...prev, userMessage]);
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: option }),
      });

      if (!res.ok) throw new Error("Failed to fetch response");
      const data = await res.json();
      setResponses((prev) => [...prev, { text: data.response, isUser: false }]);
      setOptions(option === "Services" ? data.options || [] : []);
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chatbot Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-5 z-50 text-white p-3 rounded-full shadow-lg cursor-pointer"
        >
          <img src="/chatbot.png" alt="Chatbot" className="w-13 h-13" />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-16 right-5 w-80 bg-white shadow-lg rounded-lg border border-gray-300 z-50">
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-600 text-white p-3 rounded-t-lg">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-64 overflow-y-auto p-3 bg-gray-50">
            {responses.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 rounded-lg w-fit max-w-[75%] ${
                  msg.isUser ? "bg-blue-500 text-white ml-auto" : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="text-gray-500 italic text-sm">Thinking...</div>}
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <div ref={chatEndRef}></div>
          </div>

          {/* Options */}
          {options.length > 0 && (
            <div className="grid grid-cols-2 gap-2 p-3">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {/* Restart Chat Button */}
          <button
            onClick={restartChat}
            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg w-full"
          >
            🔄 Restart Chat
          </button>
        </div>
      )}
    </>
  );
}
