import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Chat() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="flex items-center gap-4 p-4 border-b border-neutral-800">
        <Link to="/" className="hover:text-primary-500">
          <ArrowLeft />
        </Link>
        <h1 className="text-2xl font-bold">Chat</h1>
      </div>

      <div className="p-4 max-w-2xl mx-auto">
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map(i => (
            <button key={i} className="w-full text-left bg-neutral-900 p-4 rounded-lg border border-neutral-800 hover:border-primary-500 hover:bg-neutral-800 transition">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent-300"></div>
                <div className="flex-1">
                  <p className="font-semibold">Player {i}</p>
                  <p className="text-sm text-neutral-400">Last message text...</p>
                </div>
                <span className="text-xs text-neutral-500">5m</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
