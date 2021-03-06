import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* font-family: 'Shadows Into Light', cursive; */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Shadows Into Light' ;
}
html{
    color:'black';
    font-size:10px;
  
}
*,*::after, *::before{
    box-sizing:inherit;
    margin:0;
    padding:0;
}
body{
    font-family: 'Montserrat', sans-serif;
    font-size:10px;
    box-sizing:border-box
}
a,button,input{
    font-family:'Shadows Into Light', sans-serif;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
`;
