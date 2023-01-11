import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` {
  *{  
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 16px;
  }
  ul,
  li {
    list-style: none;
  }
  textarea,
  keygen,
  select,
  button {
    all: unset;
    font-family: inherit;
    font-size: inherit;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input{
    all: unset
  }
}
`;

export default GlobalStyle;
