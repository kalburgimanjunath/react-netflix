import React from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <input type="text" placeholder="Email/Phone number" />
        <input type="password" placeholder="Password" />
        <button type="button">Sign In</button>
        <Link to="./signup">Sign Up Now</Link>
      </form>
    </div>
  );
}
