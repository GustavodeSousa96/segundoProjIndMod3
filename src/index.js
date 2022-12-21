import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Importação do CSS precisa ser aqui no Index.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


