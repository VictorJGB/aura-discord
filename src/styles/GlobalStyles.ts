import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html, body, #root{
        height: 100%;

    }

    :root{
        --primary: #15141b;
        --secondary: #29263c;
        --tertiary: #ffca85;
        --quarternary: #201F28;
        --quinary: #61ffca;
        --senary: #F694FF;
    
        --white: #fff;
        --black: #15141b;
        --gray: #9C9C9C;
        --avatar: #6d6d6d;
        --symbol: #74777a;
        --notification: #54c59f;
        --selection: #51497E;
        --foreground: #edecee;
    
        --aura: #8464c6;
    }

    *, button, input{
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif;
    }
`;
