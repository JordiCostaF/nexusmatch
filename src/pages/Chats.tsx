import { Link } from "react-router-dom";
import { Search, MessageCircle } from "lucide-react";
import { MOCK_USERS, MOCK_CHATS, MATCHES } from "../data/mockData";

export function Chats() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="pt-6 pb-4 px-4 md:px-6 sticky top-0 bg-neutral-950/80 backdrop-blur-lg z-20 border-b border-neutral-800/50">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">Mensajes</h1>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" size={18} />
          <input
            type="text"
            placeholder="Buscar chats..."
            className="w-full bg-neutral-800/50 border border-neutral-700/50 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary-500/50 focus:bg-neutral-800/70 transition-colors"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-8 md:pb-0">
        {/* Matches Section */}
        <div className="px-4 md:px-6 mb-6">
          <h2 className="text-xs md:text-sm font-semibold text-neutral-400 mb-3 uppercase tracking-wider">Nuevos Matches</h2>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {MATCHES.map((id) => {
              const u = MOCK_USERS.find(user => user.id === id);
              if (!u) return null;
              return (
                <Link to={`/chat/new-${u.id}`} key={u.id} className="flex flex-col items-center gap-1 min-w-[72px] group">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-500 p-0.5 shadow-glow-primary group-hover:shadow-glow-primary group-hover:scale-110 transition-all">
                    <img src={u.image} className="w-full h-full rounded-full object-cover" alt={u.name} />
                  </div>
                  <span className="text-[10px] text-white truncate w-full text-center group-hover:text-accent-300 transition-colors">{u.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="px-2 md:px-6 flex flex-col">
          <h2 className="text-xs md:text-sm font-semibold text-neutral-400 mb-3 px-2 md:px-0 uppercase tracking-wider">Conversaciones</h2>
          {MOCK_CHATS.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-neutral-500 py-12 px-4">
              <MessageCircle size={48} className="mb-3 opacity-50" />
              <p className="text-center">No hay conversaciones aún</p>
              <p className="text-sm text-neutral-600 mt-1">¡Encuentra jugadores y empieza a chatear!</p>
            </div>
          ) : (
            MOCK_CHATS.map((chat) => {
              const isGroup = chat.isGroup;
              let title = chat.name;
              let image = "";

              if (!isGroup) {
                const otherUserId = chat.participantIds.find(id => id !== "u1");
                const otherUser = MOCK_USERS.find(u => u.id === otherUserId);
                if (otherUser) {
                  title = otherUser.name;
                  image = otherUser.image;
                }
              } else {
                title = chat.name || "Party";
              }

              return (
                <Link
                  to={isGroup && chat.partyId ? `/party/${chat.partyId}` : `/chat/${chat.id}`}
                  key={chat.id}
                  className="flex gap-4 p-3 md:p-4 hover:bg-neutral-900/50 rounded-2xl cursor-pointer transition items-center group"
                >
                  <div className="relative flex-shrink-0">
                    {isGroup ? (
                      <div className="w-14 h-14 rounded-xl bg-primary-500/20 border-2 border-primary-500/30 group-hover:border-primary-500/60 flex items-center justify-center text-xl transition-all shadow-glow-primary">
                        🎮
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary-500/30 group-hover:ring-primary-500/60 transition-all">
                        <img src={image} alt={title} className="w-full h-full object-cover bg-neutral-800 group-hover:scale-110 transition-transform" />
                      </div>
                    )}
                    {!isGroup && chat.unreadCount && chat.unreadCount > 0 && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-accent-300 border-2 border-neutral-950 rounded-full flex items-center justify-center text-[10px] font-bold text-neutral-950 shadow-glow-accent" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-semibold text-white truncate group-hover:text-primary-300 transition-colors">{title}</h3>
                      <span className="text-xs text-neutral-500 flex-shrink-0 ml-2">
                        {chat.lastMessageTime}
                      </span>
                    </div>
                    <p className={`text-sm truncate transition-colors ${
                      chat.unreadCount ? 'text-neutral-100 font-medium' : 'text-neutral-400'
                    }`}>
                      {chat.lastMessage}
                    </p>
                  </div>

                  {chat.unreadCount && chat.unreadCount > 0 && (
                    <div className="w-6 h-6 bg-accent-300 rounded-full flex items-center justify-center text-[11px] font-bold text-neutral-950 flex-shrink-0 shadow-glow-accent">
                      {chat.unreadCount > 9 ? '9+' : chat.unreadCount}
                    </div>
                  )}
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
