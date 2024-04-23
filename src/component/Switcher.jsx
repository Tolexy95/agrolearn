import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { DarkModeSwitch } from 'react-toggle-dark-mode';


export default function Switcher() {
  const [colorTheme, setTheme] = DarkModeToggle();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className='fixed top-8 px-4 py-1 right-24 border border-green-300 lg:fixed lg:top-14 lg:right-8 z-50 lg:px-4 lg:py-1 rounded-full'>
        <DarkModeSwitch color='green' checked={darkSide} onChange={toggleDarkMode} size={16} className='lg:size-26' />
      </div>
    </>
  );
}