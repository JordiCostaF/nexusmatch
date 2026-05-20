import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Social() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="flex items-center gap-4 p-4 border-b border-neutral-800">
        <Link to="/" className="hover:text-primary-500">
          <ArrowLeft />
        </Link>
        <h1 className="text-2xl font-bold">Social</h1>
      </div>

      <div className="p-4 max-w-2xl mx-auto">
        <div className="grid gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-neutral-900 p-4 rounded-lg border border-neutral-800 hover:border-primary-500 transition">
              <div className="flex gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary-500"></div>
                <div>
                  <p className="font-semibold">Player {i}</p>
                  <p className="text-sm text-neutral-400">Just now</p>
                </div>
              </div>
              <p className="text-neutral-300">Playing some great games today! 🎮</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
