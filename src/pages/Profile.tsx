import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Profile() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="flex items-center gap-4 p-4 border-b border-neutral-800">
        <Link to="/" className="hover:text-primary-500">
          <ArrowLeft />
        </Link>
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>

      <div className="p-4 max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-primary-500 via-accent-300 to-highlight-300 p-1 rounded-lg mb-6">
          <div className="bg-neutral-900 p-6 rounded-lg text-center">
            <div className="w-24 h-24 rounded-full bg-primary-500 mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold mb-2">John Doe</h2>
            <p className="text-neutral-400">Casual Gamer</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <h3 className="font-semibold mb-2">Favorite Games</h3>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm">Valorant</span>
              <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm">CS2</span>
              <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm">LoL</span>
            </div>
          </div>

          <button className="w-full bg-accent-300 text-neutral-950 font-semibold py-3 rounded-lg hover:opacity-90 transition">
            Edit Profile
          </button>
          <button className="w-full bg-neutral-800 text-white font-semibold py-3 rounded-lg hover:bg-neutral-700 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
