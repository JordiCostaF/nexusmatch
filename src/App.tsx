import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Social from './pages/Social'
import Chat from './pages/Chat'
import Profile from './pages/Profile'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-950 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/social" element={<Social />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
