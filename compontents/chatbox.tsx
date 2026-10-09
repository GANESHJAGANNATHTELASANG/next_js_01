"use client";

import { useState } from "react";

export default function ChatBox() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log(message);
    setMessage("");
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none"
        />

        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 cusorsor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  );
}
