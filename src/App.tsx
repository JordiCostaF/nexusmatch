/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Discovery } from "./pages/Discovery";
import { Social } from "./pages/Social";
import { Chats } from "./pages/Chats";
import { Profile } from "./pages/Profile";
import { ChatRoom } from "./pages/ChatRoom";
import { PartyChatRoom } from "./pages/PartyChatRoom";
import { EditProfile } from "./pages/EditProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Discovery />} />
          <Route path="/social" element={<Social />} />
          <Route path="/chat" element={<Chats />} />
          <Route path="/chat/:id" element={<ChatRoom />} />
          <Route path="/party/:id" element={<PartyChatRoom />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
