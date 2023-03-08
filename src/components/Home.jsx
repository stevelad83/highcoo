import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext.js';

export default function Home() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="auth/sign-in" />;
  }
  return <div>Home</div>;
}
