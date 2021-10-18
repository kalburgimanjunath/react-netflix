import React from 'react';
import {
  Membership,
  Features,
  MembershipForm,
  FAQ,
  Footer,
} from '../components/index';
export default function Home() {
  return (
    <div>
      <Membership />
      <Features />
      <FAQ />
      <MembershipForm />
      <Footer />
    </div>
  );
}
