import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <Link to="./home">Logo</Link>
      <div>Language</div>
      <Link to="./login">Login</Link>
      <Link to="./dashboard">Dashboard</Link>
    </div>
  );
}
