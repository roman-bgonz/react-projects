import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const HeaderContext = ({ handleLanguage, texts, auth, handleAuth }) => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light-context"
        value="light"
        onClick={handleTheme}
      />
      <label htmlFor="light-context">{texts.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark-context"
        value="dark"
        onClick={handleTheme}
      />
      <label htmlFor="dark-context">{texts.headerDark}</label>
      <button onClick={handleAuth}>
        {auth ? texts.buttonLogout : texts.buttonLogin}
      </button>
    </header>
  );
};

export default HeaderContext;
