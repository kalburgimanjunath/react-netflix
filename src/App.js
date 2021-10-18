import React from 'react';
import './style.css';
import { Header } from './components/index';
import { Main } from './pages/index';
import { BrowserRouter as Router } from 'react-router-dom';
export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Main />
      </div>
    </Router>
  );
}
