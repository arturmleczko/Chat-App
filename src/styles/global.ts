import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.palette.common.white};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    color: ${({ theme }) => theme.palette.common.black};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    letter-spacing: -0.02em;
  }
`;

export default Global;
