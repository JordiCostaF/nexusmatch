import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Users2, Search } from "lucide-react";
import { MOCK_STORIES, MOCK_USERS, MOCK_PARTIES } from "../data/mockData";
import { GAMES } from "../data/games";

export function Social() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="pt-6 pb-4 px-4 md:px-6 sticky top-0 bg-neutral-950/80 backdrop-blur-lg z-20 border-b border-neutral-800/50">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Comunidad</h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-8 md:pb-0">
        {/* Stories Section */}
        <div className="px-4 md:px-6 mb-8">
          <h2 className="text-xs md:text-sm font-semibold text-neutral-400 mb-4 uppercase tracking-wider">Estados</h2>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <button className="w-16 h-16 rounded-full border-2 border-dashed border-neutral-700 hover:border-primary-500/50 flex items-center justify-center bg-neutral-900/50 text-neutral-400 hover:text-primary-300 transition-all duration-300">
                <Plus size={24} />
              </button>
              <span className="text-[10px] text-neutral-400">Tu Estado</span>
            </div>

            {MOCK_STORIES.map((story) => {
              const user = MOCK_USERS.find((u) => u.id === story.userId);
              if (!user) return null;

              return (
                <div key={story.id} className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className={`p-0.5 rounded-full transition-all ${
                    story.viewed
                      ? 'bg-neutral-800/50'
                      : 'bg-gradient-to-tr from-primary-500 via-accent-300 to-highlight-300 shadow-glow-primary'
                  }`}>
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-neutral-950"
                    />
                  </div>
                  <span className="text-[10px] text-white truncate w-16 text-center">{user.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Parties/Rooms Section */}
        <div className="px-4 md:px-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xs md:text-sm font-semibold text-neutral-400 uppercase tracking-wider">Partys Activas</h2>
            <button className="text-accent-300 text-xs md:text-sm flex items-center gap-1 font-medium bg-accent-300/10 hover:bg-accent-300/20 px-3 py-1.5 rounded-full transition-colors">
              <Plus size={16} /> Crear
            </button>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" size={18} />
            <input
              type="text"
              placeholder="Buscar por juego o nombre..."
              className="w-full bg-neutral-800/50 border border-neutral-700/50 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary-500/50 focus:bg-neutral-800/70 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-4">
            {MOCK_PARTIES.map((party) => {
              const game = GAMES.find(g => g.id === party.gameId);
              return (
                <Link
                  to={`/party/${party.id}`}
                  key={party.id}
                  className="card-hover bg-neutral-900/50 backdrop-blur border border-neutral-800/50 rounded-2xl p-4 flex gap-4 items-center group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative ring-2 ring-primary-500/30 group-hover:ring-primary-500/60 transition-all">
                    {game && <img src={game.image} alt={game.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Plus className="text-white" size={20} />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white truncate">{party.name}</h3>
                    <p className="text-sm text-accent-300 truncate font-medium">{game?.name}</p>
                    <div className="flex -space-x-2 mt-2">
                      {party.members.map((memberId, idx) => {
                        const m = MOCK_USERS.find(u => u.id === memberId);
                        if (!m) return null;
                        return (
                          <img
                            key={memberId}
                            src={m.image}
                            alt={m.name}
                            className="w-6 h-6 rounded-full border-2 border-neutral-950 object-cover hover:scale-125 transition-transform"
                            style={{ zIndex: party.members.length - idx }}
                            title={m.name}
                          />
                        );
                      })}
                      <div className="w-6 h-6 rounded-full bg-neutral-800/80 border-2 border-neutral-950 flex items-center justify-center text-[10px] text-neutral-400 font-medium">
                        +{party.maxMembers - party.members.length}
                      </div>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-300 flex-shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-glow-primary">
                    <Users2 size={18} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
