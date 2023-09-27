import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mapa from './pages/Mapa/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Mapa/>
  </React.StrictMode>
);

