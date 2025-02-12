import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // импортируем необходимые компоненты для маршрутов
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Account from './Account.tsx';  // Ваш компонент для страницы аккаунта

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />  {/* Страница с компонентом App */}
                <Route path="/account" element={<Account />} />  {/* Страница аккаунта */}
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
