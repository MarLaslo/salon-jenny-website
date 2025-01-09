import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StrictMode } from 'react';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>
);
