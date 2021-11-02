import { createGlobalStyle } from 'styled-components';
export const globalStyle = createGlobalStyle`
//Reseting
*,
*::before,
*::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
}
//Colors 
body{
    color: white;
}
a,button,input{
    color: white;
}
//Font Sizes
h1{
    font-size: ${({ theme }) => theme.fontSize.xl};
}
h2{
    font-size: ${({ theme }) => theme.fontSize.l};
}
p,label{
    font-size: ${({ theme }) => theme.fontSize.m};
}
//Fonts
a,button{
    font-family: 'Oswald', sans-serif;
}
label{
    font-family: 'Roboto Condensed', sans-serif; 
}

`;
