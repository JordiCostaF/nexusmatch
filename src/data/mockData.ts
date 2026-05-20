export type PlayStyle = "Casual" | "Competitivo" | "Por Diversión" | "Grabar Videos/Content Creator";

export interface User {
  id: string;
  name: string;
  age: number;
  language: string;
  bio: string;
  image: string;
  games: string[]; // game IDs
  playStyle: PlayStyle;
}

export interface Story {
  id: string;
  userId: string;
  imageUrl: string;
  viewed: boolean;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}

export interface Party {
  id: string;
  name: string;
  gameId: string;
  members: string[]; // user IDs
  maxMembers: number;
}

export const MOCK_USERS: User[] = [
  {
    id: "u1",
    name: "Alex",
    age: 22,
    language: "Español",
    bio: "Main Cypher en Valorant. Busco equipo para subir a Inmortal o chillear en party.",
    image: "https://images.unsplash.com/photo-1566492031523-0c4871d3d63b?auto=format&fit=crop&q=80&w=400&h=500",
    games: ["30", "1", "31"],
    playStyle: "Competitivo"
  },
  {
    id: "u2",
    name: "CamilaXD",
    age: 19,
    language: "Inglés, Español",
    bio: "Juego Minecraft, Stardew Valley y a veces Lolcito. Me gusta construir.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400&h=500",
    games: ["32", "16", "31"],
    playStyle: "Casual"
  },
  {
    id: "u3",
    name: "DarkKnight99",
    age: 25,
    language: "Español",
    bio: "Tryhardeando en Elden Ring y Tarkov. Si no aguantas la presión, no hables.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500",
    games: ["15", "43", "9"],
    playStyle: "Competitivo"
  },
  {
    id: "u4",
    name: "LuzuFan",
    age: 21,
    language: "Español",
    bio: "Hago streams por las noches! Únete a mis partidas.",
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=400&h=500",
    games: ["38", "5", "6"],
    playStyle: "Grabar Videos/Content Creator"
  },
  {
    id: "u5",
    name: "PacoTaco",
    age: 24,
    language: "Español, Portugués",
    bio: "Solo entro a reírme un rato con los panas. PUBG y Helldivers 2 a muerte.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500",
    games: ["3", "7", "20"],
    playStyle: "Por Diversión"
  }
];

export const MOCK_STORIES: Story[] = [
  { id: "s1", userId: "u1", imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=200&h=300", viewed: false },
  { id: "s2", userId: "u2", imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=200&h=300", viewed: false },
  { id: "s3", userId: "u4", imageUrl: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=200&h=300", viewed: true },
];

export const MOCK_PARTIES: Party[] = [
  { id: "p1", name: "Rankeds ORO-PLAT", gameId: "30", members: ["u1", "u4"], maxMembers: 5 },
  { id: "p2", name: "Minecraft Vanilla Survival", gameId: "32", members: ["u2"], maxMembers: 10 },
  { id: "p3", name: "Farmeando Super Tier", gameId: "7", members: ["u3", "u5"], maxMembers: 4 },
];

export interface Chat {
  id: string;
  participantIds: string[];
  isGroup: boolean;
  partyId?: string;
  name?: string;
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount?: number;
}

export const MOCK_CHATS: Chat[] = [
  { id: "c1", participantIds: ["u1", "u4"], isGroup: false, lastMessage: "¿Jugamos unas rankeds hoy?", lastMessageTime: "12:30", unreadCount: 1 },
  { id: "c2", participantIds: ["u1", "u2"], isGroup: false, lastMessage: "Jajaja estuvo buenisima esa partida", lastMessageTime: "Ayer", unreadCount: 0 },
  { id: "p1", participantIds: ["u1", "u3", "u5"], isGroup: true, partyId: "p3", name: "Farmeando Super Tier", lastMessage: "Dale, entra al discord", lastMessageTime: "10:15", unreadCount: 5 },
];

export const MOCK_MESSAGES: ChatMessage[] = [
  { id: "m1", senderId: "u4", text: "Hola! Vi que juegas Valorant", timestamp: "12:28" },
  { id: "m2", senderId: "u1", text: "Sii, soy main Cypher pero ando flexeando a veces", timestamp: "12:29" },
  { id: "m3", senderId: "u4", text: "¿Jugamos unas rankeds hoy?", timestamp: "12:30" },
];

export const MATCHES: string[] = ["u3", "u5"];
