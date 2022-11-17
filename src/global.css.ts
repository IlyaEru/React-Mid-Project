import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: auto;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  html {
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family:  roboto,-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  body {
    font-size: calc(12px + 1vw);
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;
  }
  
   #root {
    height: 100vh;
    width: 100%;
  }
  .btn{
  border-radius: 4px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  }
`;
