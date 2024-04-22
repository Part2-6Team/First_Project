import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './color.css';
import MainPage from './pages/MainPage';
import SendMessagePage from './pages/SendMessagePage';
import CreatedRollingPage from './pages/CreatedRollingPage';
import CreatedRolloingPageEdit from './pages/CreatedRollingPageEdit';
import PostPage from './pages/MakePostPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="post/:id" element={<CreatedRollingPage />} />
        <Route path="post/:id/edit" element={<CreatedRolloingPageEdit />} />
        <Route path="post/:id/message" element={<SendMessagePage />} />
        <Route path="post" elemet={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
