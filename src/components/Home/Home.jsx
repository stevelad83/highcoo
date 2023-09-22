import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import PoemsList from '../List/PoemsList.js';
import './Home.css';

export default function Home() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="auth/sign-in" />;
  }
  return (
    <div className="home">
      <h2 className="home-heading">Wisdom lives here</h2>
      <PoemsList />
    </div>
  );
}
