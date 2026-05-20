import React, { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "motion/react";
import { UserSquare2, Gamepad2, X, Heart, MessageSquare } from "lucide-react";
import { MOCK_USERS, User } from "../data/mockData";
import { GAMES } from "../data/games";

export function Discovery() {
  const [cards, setCards] = useState(MOCK_USERS);
  const [history, setHistory] = useState<User[]>([]);

  const handleSwipe = (direction: "left" | "right", user: User) => {
    setCards((prev) => prev.filter((c) => c.id !== user.id));
    if (direction === "right") {
      setHistory((prev) => [...prev, user]);
      // In a real app we'd dispatch a like to the backend here
    }
  };

  return (
    <div className="h-full w-full flex flex-col relative">
      <div className="pt-6 pb-4 px-4 md:px-6 flex justify-between items-center z-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="text-gradient">NexusMatch</span>
            <Gamepad2 className="text-accent-300 animate-pulse-glow" />
          </h1>
          <p className="text-neutral-400 text-sm mt-1">Encuentra tu duo perfecto</p>
        </div>
      </div>

      <div className="flex-1 relative flex items-center justify-center p-4">
        <AnimatePresence>
          {cards.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex flex-col items-center justify-center text-neutral-500 h-full"
            >
              <UserSquare2 size={64} className="mb-4 opacity-50" />
              <p className="text-lg">No hay más jugadores cerca de ti.</p>
              <button 
                onClick={() => setCards(MOCK_USERS)}
                className="mt-4 px-6 py-2 bg-neutral-800 rounded-full text-white hover:bg-neutral-700 transition"
              >
                Volver a buscar
              </button>
            </motion.div>
          )}

          {cards.map((user, index) => {
            const isFront = index === cards.length - 1;
            return (
              <SwipeCard 
                key={user.id} 
                user={user} 
                isFront={isFront} 
                onSwipe={(dir) => handleSwipe(dir, user)} 
              />
            );
          })}
        </AnimatePresence>
      </div>
      
      {cards.length > 0 && (
        <div className="pb-6 md:pb-8 px-4 md:px-8 flex justify-center gap-4 md:gap-6 z-10">
          <button
            onClick={() => handleSwipe("left", cards[cards.length - 1])}
            className="w-14 h-14 md:w-16 md:h-16 bg-neutral-800/60 backdrop-blur hover:bg-neutral-700/80 rounded-full flex items-center justify-center shadow-lg border border-neutral-700 text-highlight-300 hover:shadow-glow-highlight transition-all duration-300 active:scale-95"
          >
            <X size={28} className="md:w-8 md:h-8" />
          </button>
          <button
            onClick={() => handleSwipe("right", cards[cards.length - 1])}
            className="w-14 h-14 md:w-16 md:h-16 bg-primary-500 hover:bg-primary-400 rounded-full flex items-center justify-center shadow-glow-primary hover:shadow-glow-primary text-white transition-all duration-300 active:scale-95"
          >
            <Heart size={28} className="md:w-8 md:h-8" fill="currentColor" />
          </button>
        </div>
      )}
    </div>
  );
}

const SwipeCard: React.FC<{ user: User; isFront: boolean; onSwipe: (dir: "left" | "right") => void }> = ({ user, isFront, onSwipe }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (_e: any, info: any) => {
    if (info.offset.x > 100) {
      onSwipe("right");
    } else if (info.offset.x < -100) {
      onSwipe("left");
    } else {
      // snap back is handled by framer motion automatically with dragConstraints
    }
  };

  const userGames = GAMES.filter(g => user.games.includes(g.id));

  return (
    <motion.div
      style={{
        x: isFront ? x : 0,
        rotate: isFront ? rotate : 0,
        opacity: isFront ? 1 : 0,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className={`absolute inset-0 m-2 md:m-4 rounded-3xl overflow-hidden backdrop-blur-sm border border-neutral-800/50 shadow-2xl origin-bottom touch-none`}
    >
      {/* Fondo con imagen */}
      <div className="absolute inset-0">
        <img src={user.image} alt={user.name} className="w-full h-full object-cover" draggable={false} />
        {/* Gradiente mejorado con colores de marca */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/0 via-transparent to-transparent opacity-20" />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="absolute bottom-0 w-full p-4 md:p-6 flex flex-col gap-3">
        {/* Header con nombre y edad */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-none">
            {user.name}
            <span className="text-lg md:text-xl font-normal text-neutral-300 ml-2">{user.age}</span>
          </h2>
          <p className="text-accent-300 font-medium mt-2">
            {user.playStyle}
          </p>
        </div>

        {/* Bio */}
        <p className="text-neutral-200 text-sm line-clamp-2">{user.bio}</p>

        {/* Idioma */}
        <div className="flex gap-2 text-xs text-neutral-400 items-center">
          <MessageSquare size={14} className="text-accent-300" />
          <span>{user.language}</span>
        </div>

        {/* Juegos */}
        <div className="flex gap-2 mt-2 overflow-x-auto no-scrollbar pb-1">
          {userGames.map(g => (
            <div key={g.id} className="flex-shrink-0 w-12 h-16 rounded-lg overflow-hidden relative border border-primary-500/30 hover:border-primary-500/60 transition-colors">
              <img src={g.image} alt={g.name} className="w-full h-full object-cover opacity-90" draggable={false} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
