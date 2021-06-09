import React from 'react';
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

export default function ComponentesEstilizados() {
  let mainColor = '#db7093',
    mainAlfaColor80 = '#db709380';

  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  const fadeIn = keyframes`
    0% {
      opacity: 0
    }
    100% {
      opacity: 1;
    }
  `;

  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${({ color }) => color};
    color: ${({ color }) =>
      color ||
      '#000'}; //Si la propiedad color no viene, entonces se le aplica el colo negro
    background-color: ${mainColor};
    transition: ${setTransitionTime('0.5s')};
    animation: ${fadeIn} 2s ease-out;

    ${({ isButton }) =>
      isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.5rem;
        cursor: pointer;
      `}

    &:hover {
      background-color: ${mainAlfaColor80};
    }
  `;

  const light = {
    color: '#222',
    bgColor: '#DDD',
  };

  const dark = {
    color: '#DDD',
    bgColor: '#222',
  };

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  const GlobalStyle = createGlobalStyle`
    h2 {
      padding: 2rem;
      background-color: "#61dafb";
      text-transform: uppercase;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <MyH3>Hola, soy un componente estilizado con styled-components</MyH3>
      <MyH3 color="#61dafb">
        Hola, soy un componente estilizado con styled-components
      </MyH3>
      <MyH3 isButton>Hola, soy un H3 estilizado como boton</MyH3>
      <ThemeProvider theme={light}>
        <Box>Soy una caja light</Box>
        <BoxRounded>Soy una caja light redondeada</BoxRounded>
      </ThemeProvider>

      <ThemeProvider theme={dark}>
        <Box>Soy una caja dark</Box>
        <BoxRounded>Soy una caja dark redondeada</BoxRounded>
      </ThemeProvider>
    </>
  );
}
