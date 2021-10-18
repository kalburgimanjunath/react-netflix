import React from 'react';
export default function MembershipForm() {
  return (
    <>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form>
        <input type="text" placeholder="Email Address" />
        <button type="button">Get Started</button>
      </form>
    </>
  );
}
