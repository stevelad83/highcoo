import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import PoemsList from '../List/PoemsList.js';

export default function Home() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="auth/sign-in" />;
  }
  return (
    <div>
      <h3>Here Haiku Here</h3>
      <PoemsList />
    </div>
  );
}
