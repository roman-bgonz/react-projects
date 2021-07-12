import React from 'react';

const MainContext = ({ theme, texts, auth }) => {
  return (
    <main className={theme}>
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
      <p>{texts.mainContent}</p>
    </main>
  );
};

export default MainContext;
