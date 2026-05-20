import { Link } from "react-router-dom";
import { Settings, Edit2, LogOut, Video, Plus } from "lucide-react";
import { MOCK_USERS } from "../data/mockData";
import { GAMES } from "../data/games";
import { cn } from "../lib/utils";

export function Profile() {
  const currentUser = MOCK_USERS[0];

  return (
    <div className="h-full w-full flex flex-col relative">
      {/* Gradient background */}
      <div className="absolute top-0 w-full h-48 bg-gradient-to-b from-primary-500/10 via-accent-300/5 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="pt-6 pb-4 px-4 md:px-6 flex justify-between items-center z-10 relative border-b border-neutral-800/50">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Mi Perfil</h1>
        <button className="text-neutral-400 hover:text-accent-300 hover:bg-neutral-800/50 p-2 rounded-lg transition-colors">
          <Settings size={24} />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-4 md:px-6 pb-20 md:pb-0 relative z-10">
        {/* Profile Header */}
        <div className="flex flex-col mb-8 mt-4">
          <div className="relative w-28 h-28 mx-auto mb-4">
            <img
              src={currentUser.image}
              alt={currentUser.name}
              className="w-full h-full rounded-full object-cover border-4 border-neutral-950 shadow-2xl ring-4 ring-primary-500/50"
            />
            <Link
              to="/profile/edit"
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary-500 hover:bg-primary-400 text-white flex items-center justify-center transition-all shadow-glow-primary border-2 border-neutral-950 active:scale-95"
            >
              <Edit2 size={14} strokeWidth={3} />
            </Link>
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {currentUser.name}, {currentUser.age}
            </h2>
            <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
              <span className="px-3 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/50 text-[10px] font-medium text-primary-300 uppercase tracking-wide">
                {currentUser.playStyle}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-accent-300/20 border border-accent-300/50 text-[10px] font-medium text-accent-300 uppercase tracking-wide">
                {currentUser.language}
              </span>
            </div>
            <p className="text-neutral-400 text-sm max-w-[320px] mx-auto">
              {currentUser.bio}
            </p>
          </div>
        </div>

        {/* Games Section */}
        <div className="space-y-6">
          <div className="card-base bg-neutral-900/50 backdrop-blur border border-neutral-800/50 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-white">Mis Juegos Favoritos</h3>
              <Link to="/profile/edit" className="text-sm text-primary-400 hover:text-primary-300 font-medium transition-colors">
                Editar
              </Link>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {currentUser.games.map(gameId => {
                const game = GAMES.find(g => g.id === gameId);
                return game ? (
                  <div
                    key={game.id}
                    className="aspect-[3/4] rounded-lg overflow-hidden relative group ring-2 ring-primary-500/30 hover:ring-primary-500/60 transition-all"
                  >
                    <img
                      src={game.image}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all"
                      alt={game.name}
                    />
                  </div>
                ) : null;
              })}
              <button className="aspect-[3/4] rounded-lg border-2 border-dashed border-neutral-700 hover:border-primary-500/50 hover:bg-primary-500/10 flex items-center justify-center text-neutral-500 hover:text-primary-400 transition-all">
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Options Section */}
          <div className="card-base bg-neutral-900/50 backdrop-blur border border-neutral-800/50 rounded-2xl p-5">
            <h3 className="font-semibold text-white mb-4">Opciones</h3>
            <div className="space-y-1">
              <OptionRow icon={Video} label="Conectar cuenta de Twitch" />
              <div className="h-px w-full bg-neutral-800/50 my-2" />
              <OptionRow icon={Settings} label="Preferencias de Match" />
              <div className="h-px w-full bg-neutral-800/50 my-2" />
              <OptionRow icon={LogOut} label="Cerrar Sesión" isDestructive />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OptionRow({
  icon: Icon,
  label,
  isDestructive = false,
}: {
  icon: any;
  label: string;
  isDestructive?: boolean;
}) {
  return (
    <button
      className={cn(
        "w-full flex items-center gap-3 p-2 rounded-lg transition-colors",
        isDestructive
          ? "text-highlight-300 hover:bg-highlight-300/10"
          : "text-neutral-400 hover:text-white hover:bg-neutral-800/30"
      )}
    >
      <Icon size={20} />
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
}
