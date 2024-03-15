import { createGlobalStyle } from 'styled-components'
import { defaultThemes } from './themes/default'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }
    body{
        background: linear-gradient(180deg, ${defaultThemes["purple-200"]} 0%, ${defaultThemes["purple-100"]} 100%);
        -webkit-font-smoothing: antialiased;
        height: 100vh;
        width:100%;
        font-family: 'Montserrat', sans-serif;
    }
`
