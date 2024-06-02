import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Pokemon from './components/Pokemon';
import reportWebVitals from './reportWebVitals';
import InfoPikachu from './components/InfoPikachu';
import AllPokemon from './components/AllPokemon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <InfoPikachu /> */}
    <AllPokemon />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
