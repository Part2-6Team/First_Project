import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './color.css';
import MainPage from './pages/MainPage';
import SendMessagePage from './pages/SendMessagePage';
import CreatedRollingPage from './pages/createdRollingPage';
import CreatedRolloingPageEdit from './pages/CreatedRollingPageEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="post/:id" element={<CreatedRollingPage />} />
        <Route path="post/:id/edit" element={<CreatedRolloingPageEdit />} />
        <Route path="post/:id/message" element={<SendMessagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
