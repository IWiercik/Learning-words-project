import { createGlobalStyle } from 'styled-components';
export const globalStyle = createGlobalStyle`
*,
*::before,
*::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}
body{
    font-family: 'Barlow Condensed', sans-serif;
    color: white;
}
h1{
    font-size: ${({ theme }) => theme.fontSize.xl};
}
h2{
    font-size: ${({ theme }) => theme.fontSize.l};
}
a, button{
    font-family: 'Barlow Condensed', sans-serif;
}

`;
