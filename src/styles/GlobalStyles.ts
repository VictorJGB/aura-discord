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
        --quarternary: #292b2f;
        --quinary: #61ffca;
        --senary: #828386;
    
        --white: #fff;
        --black: #15141b;
        --gray: #9C9C9C;
        --chat-input: rgb(64,68,75);
        --symbol: #74777a;
        --notification: #54c59f;
        --selection: #51497E;
        --dark-selection: #29263c;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;
        --background: #15141b;
    
        --link: #5d80d6;
    
        --aura: #8464c6;
    }

    *, button, input{
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif;
    }
`;
