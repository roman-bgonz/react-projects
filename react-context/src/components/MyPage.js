import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const initialTheme = 'light';
const MyPage = () => {
  const handleTheme = (e) => {
    if (e.target.value === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  const [theme, setTheme] = useState(initialTheme);
  return (
    <div className="my-page">
      <Header theme={theme} handleTheme={handleTheme} />
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default MyPage;
