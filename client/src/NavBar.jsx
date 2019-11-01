import React from 'react';
import { useDarkMode } from './hooks/UseDarkMode';
import styled from 'styled-components'

export default function Nav() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className='navbar'>
      <h1>Women's World Cup Players</h1>
      <button onClick={toggleMode}>Dark Mode: {darkMode ? 'On' : 'Off'}</button>
    </div>
  );
} 