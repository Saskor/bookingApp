import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`

 html,
 body {
   padding: 0;
   margin: 0;
   font-family: 'Playfair Display', serif;
 }


 a {
   color: inherit;
   text-decoration: none;
 }


 * {
   box-sizing: border-box;
 }


`;

export default ResetStyles;
