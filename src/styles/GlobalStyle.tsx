import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import {Poppins } from 'next/font/google'

const poppins = Poppins({
  display: 'swap',
  style: 'normal',
  subsets: ['latin'],
  weight: ['400', '500', '800']
});

export const GlobalStyle: any = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    word-break: keep-all;
    font-family: ${poppins.style.fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  html, body {
    background-color: black;
  }

  body {
    margin: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  input {
    outline: 0;
  }

  img {
    -webkit-user-drag: none;
    user-select: none;
  }

  button {
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
  }

  ::selection {
    color: rgba(255, 255, 255, 0.65);
    background-color: rgba(152, 24, 35, 0.65);
  }
`;
