import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext.js';
import { getPoems } from '../services/poems.js';
import Form from './Form.js';
import PoemsList from './PoemsList.js';

export default function Home() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="auth/sign-in" />;
  }
  return (
    <div>
      <p>Here Haiku Here</p>
      {/* {getPoems()} */}
      <PoemsList />
      <Form />
    </div>
  );
}
