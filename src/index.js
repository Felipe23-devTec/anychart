import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importa o componente App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Renderiza o componente App dentro do elemento com o ID 'root' no seu arquivo HTML
);
