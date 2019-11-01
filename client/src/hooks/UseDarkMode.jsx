import { useEffect } from 'react';
import { useLocalStorage } from './UseLocalState';

export const useDarkMode = initialValue => {
  const [darkMode, setDarkMode] = useLocalStorage('darkModeKey', false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      alert('YOU HAVE ENTERED THE DARK MODE')
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};