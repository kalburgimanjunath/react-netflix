import React from 'react';
import './style.css';
import { Header } from './components/index';
import { BrouserRouter } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <BrouserRouter>
        <Header />
      </BrouserRouter>
    </div>
  );
}
