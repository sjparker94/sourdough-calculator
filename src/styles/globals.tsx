import { normalize, transparentize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { device } from './breakpoint';
import { resetStyles } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  ${resetStyles}
  :root {
    --page-gutter: 2rem;
    @media ${device.mdMin} {
      --page-gutter: 4rem;
    }
    --content-gutter: 2rem;
    --form-gutter: 1rem;
    --form-error-gutter: 1rem;

    --bold-font-weight: 700;
    --extra-bold-font-weight: 700;

    /* colors */
    --red: #E31B3A;
    --blue-grey-400: #99abc2;
    --light-grey-100: #f7f7f7;
    --light-grey-200: #f3f3f3;
    --light-grey-300: #E1E1E1;

    --text-color: #0c344b;
    --light-text-color: #717171;

    /* bs */;
    --bs: 0 4px 24px 0 rgba(0, 0, 0, 0.09);
    --small-bs: 1px 3px 12px 0 rgba(0,0,0,0.05);

    /* ts */
    --ts: 3px 1px 0 ${transparentize(0.9, '#000')};

    --smooth-animation: cubic-bezier(0.165, 0.84, 0.44, 1);
    --bounce-animation: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --slow-to-quick-animation: cubic-bezier(1, 0.16, 0.52, 0.94);

    --small-border-radius: 3px;
  }
  html {

  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans JP', sans-serif;
    color: var(--text-color);
    line-height: 1.5;
  }
  h1,h2,h3 {
    font-weight: var(--extra-bold-font-weight);
  }
  b,strong {
    font-weight: bold;
  }
`;
