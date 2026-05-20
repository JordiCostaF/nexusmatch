import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Send, Phone, Video, MoreVertical, Image as ImageIcon } from "lucide-react";
import { MOCK_MESSAGES, MOCK_CHATS, MOCK_USERS } from "../data/mockData";

export function ChatRoom() {
  const { id } = useParams();
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [inputVal, setInputVal] = useState("");

  const currentUserId = "u1"; // Mocked
  
  const chat = MOCK_CHATS.find(c => c.id === id);
  
  let title = "Chat";
  let image = "";

  if (chat) {
    const otherId = chat.participantIds.find(pid => pid !== currentUserId);
    const otherUser = MOCK_USERS.find(u => u.id === otherId);
    if (otherUser) {
      title = otherUser.name;
      image = otherUser.image;
    }
  } else if (id?.startsWith("new-")) {
    const userId = id.replace("new-", "");
    const user = MOCK_USERS.find(u => u.id === userId);
    if (user) {
      title = user.name;
      image = user.image;
    }
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    setMessages([...messages, {
      id: Date.now().toString(),
      senderId: currentUserId,
      text: inputVal,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setInputVal("");
  };

  return (
    <div className="h-full w-full flex flex-col relative z-50">
      {/* Header */}
      <div className="px-4 py-3 bg-neutral-900/50 backdrop-blur border-b border-neutral-800/50 flex items-center gap-3">
        <Link to="/chat" className="text-neutral-400 hover:text-accent-300 p-1 rounded-lg transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary-500/50">
            <img src={image} className="w-full h-full object-cover" alt={title} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="font-semibold text-white truncate leading-tight">{title}</h2>
          <p className="text-xs text-accent-300 font-medium">Online</p>
        </div>
        <div className="flex items-center gap-1">
          <button className="text-neutral-400 hover:text-accent-300 hover:bg-neutral-800/50 p-2 rounded-lg transition-colors"><Phone size={20} /></button>
          <button className="text-neutral-400 hover:text-accent-300 hover:bg-neutral-800/50 p-2 rounded-lg transition-colors"><Video size={20} /></button>
          <button className="text-neutral-400 hover:text-accent-300 hover:bg-neutral-800/50 p-2 rounded-lg transition-colors"><MoreVertical size={20} /></button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {messages.map((msg, idx) => {
          const isMe = msg.senderId === currentUserId;

          return (
            <div key={msg.id} className={`flex gap-2 max-w-[85%] ${isMe ? 'self-end' : 'self-start'}`}>
              <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                <div className={`px-4 py-2.5 rounded-2xl text-sm transition-all ${
                  isMe
                    ? 'bg-primary-500 text-neutral-50 rounded-br-sm shadow-glow-primary'
                    : 'bg-neutral-800 text-neutral-100 rounded-bl-sm border border-neutral-700/50'
                }`}>
                  {msg.text}
                </div>
                <span className="text-[10px] text-neutral-500 mt-1">{msg.timestamp}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className="p-3 bg-neutral-900/50 backdrop-blur border-t border-neutral-800/50">
        <form onSubmit={handleSend} className="flex gap-2 items-end">
          <button type="button" className="p-3 text-neutral-400 hover:text-accent-300 hover:bg-neutral-800/50 transition rounded-xl shrink-0">
            <ImageIcon size={20} />
          </button>

          <div className="flex-1 bg-neutral-800/50 border border-neutral-700/50 rounded-xl flex items-center overflow-hidden focus-within:border-primary-500/50 transition-colors">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Escribe un mensaje..."
              className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={!inputVal.trim()}
            className="p-3 bg-primary-500 text-white hover:bg-primary-400 rounded-xl transition shrink-0 disabled:opacity-50 disabled:bg-neutral-800 disabled:text-neutral-500 shadow-glow-primary hover:shadow-glow-primary"
          >
            <Send size={20} className={inputVal.trim() ? "translate-x-0.5 -translate-y-0.5" : ""} />
          </button>
        </form>
      </div>
    </div>
  );
}
