import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '40px', background: 'linear-gradient(90deg, #d946a6, #00d9ff, #ff6b35)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        NexusMatch
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <Link to="/social" style={{ padding: '30px', background: '#d946a6', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Social</Link>
        <Link to="/chat" style={{ padding: '30px', background: '#00d9ff', color: '#050505', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Chat</Link>
        <Link to="/profile" style={{ padding: '30px', background: '#ff6b35', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Profile</Link>
        <button style={{ padding: '30px', background: '#333', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => alert('Games')}>Games</button>
      </div>
    </div>
  )
}

function Social() {
  return <div style={{ padding: '40px' }}><h1>Social Feed</h1><p>Posts will appear here</p></div>
}

function Chat() {
  return <div style={{ padding: '40px' }}><h1>Messages</h1><p>Chats will appear here</p></div>
}

function Profile() {
  return <div style={{ padding: '40px' }}><h1>My Profile</h1><p>Profile info here</p></div>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social" element={<Social />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
