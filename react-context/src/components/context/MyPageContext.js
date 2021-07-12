import React, { useState } from 'react';
import FooterContext from './FooterContext';
import HeaderContext from './HeaderContext';
import MainContext from './MainContext';

const initialTheme = 'light';
const initialLanguage = 'es';
const initialAuth = null;
const translations = {
  es: {
    headerTitle: 'Mi aplicación SIN Context API',
    headerSubtitle: 'Mi cabecera',
    headerLight: 'Claro',
    headerDark: 'Oscuro',
    buttonLogin: 'Iniciar Sesión',
    buttonLogout: 'Cerrar Sesión',
    mainWelcome: 'Bienvenid@ invitad@',
    mainHello: 'Hola Usuari@',
    mainContent: 'Mi contenido principal',
    footerTitle: 'Mi pié de página',
  },
  en: {
    headerTitle: 'My application without Context API',
    headerSubtitle: 'My header',
    headerLight: 'Light',
    headerDark: 'Dark',
    buttonLogin: 'Login',
    buttonLogout: 'Logout',
    mainWelcome: 'Welcome Guest',
    mainHello: 'Hello User',
    mainContent: 'My main content',
    footerTitle: 'My footer',
  },
};

const MyPageContext = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);

  const handleTheme = (e) => {
    if (e.target.value === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const handleLanguage = (e) => {
    if (e.target.value === 'es') {
      setLanguage('es');
      setTexts(translations.es);
    } else {
      setLanguage('en');
      setTexts(translations.en);
    }
  };

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  return (
    <div className="my-page">
      <HeaderContext
        theme={theme}
        handleTheme={handleTheme}
        handleLanguage={handleLanguage}
        andle
        texts={texts}
        auth={auth}
        handleAuth={handleAuth}
      />
      <MainContext theme={theme} texts={texts} auth={auth} />
      <FooterContext theme={theme} texts={texts} />
    </div>
  );
};

export default MyPageContext;
