import React from 'react';
import { useParams } from 'react-router-dom';
import Beluga from './Beluga';
import Blue from './Blue';

export default function Whale() {
    const { type } = useParams();
    
  return (
    <>
      <h2>Whale</h2>
      {type === 'beluga' && <Beluga />}
      {type === 'blue' && <Blue />}
    </>
  );
}
// https://reactrouter.com/docs/en/v6/api#usematch falta consertar o userroutematch
// https://ateliware.com/blog/react-router pode ser que funcione