import React from 'react';
import { useDarkMode } from './hooks/UseDarkMode';
import styled from 'styled-components'

const Button = styled.button`
height: 100px; 
width: 250px;
font-size: 30px;
color: orange;
background: black;
`

export default function Nav() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className='navbar'>
      <h1>Women's World Cup Players</h1>
      <Button onClick={toggleMode}>Dark Mode: {darkMode ? 'On' : 'Off'}</Button>
    </div>
  );
} 