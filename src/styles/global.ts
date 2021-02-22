import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, div {
    /* height: 100%; */
    -webkit-font-smoothing: antialiased;
    footer{
      position:absolute;
      text-align: center;
      bottom:0;
      display:block;
      width:100%;
    }
  }
  body {
    width: 100%;


  }
  body, input, button {
    font-family: 'Poppins', 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
