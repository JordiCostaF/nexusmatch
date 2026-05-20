import { Link } from 'react-router-dom'
import { Heart, Users, MessageCircle, User } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 flex flex-col items-center justify-center px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 via-accent-300 to-highlight-300 bg-clip-text text-transparent">
          NexusMatch
        </h1>
        <p className="text-neutral-400 text-lg">Find your gaming squad</p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        <Link to="/" className="bg-primary-500 hover:bg-primary-400 text-white p-6 rounded-lg flex flex-col items-center justify-center gap-2 transition">
          <Heart size={32} />
          <span>Discover</span>
        </Link>
        <Link to="/social" className="bg-accent-300 hover:bg-opacity-90 text-neutral-950 p-6 rounded-lg flex flex-col items-center justify-center gap-2 transition">
          <Users size={32} />
          <span>Social</span>
        </Link>
        <Link to="/chat" className="bg-highlight-300 hover:bg-opacity-90 text-white p-6 rounded-lg flex flex-col items-center justify-center gap-2 transition">
          <MessageCircle size={32} />
          <span>Chat</span>
        </Link>
        <Link to="/profile" className="bg-neutral-800 hover:bg-neutral-700 text-white p-6 rounded-lg flex flex-col items-center justify-center gap-2 transition">
          <User size={32} />
          <span>Profile</span>
        </Link>
      </div>
    </div>
  )
}
