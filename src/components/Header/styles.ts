import { styled } from "styled-components";
import { defaultThemes } from "../../styles/themes/default";


export const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    height: 15vh;
    align-items: center;
    nav{
        display: flex;
        gap: 1rem;
        padding: 0 0.7rem 0 0.7rem;
        background: ${defaultThemes["purple-700"]};
        height: 4rem;
        border-radius: 15px;
        justify-content: center;
        align-items: center;
        min-width: 30rem;
    }

    a{
        text-decoration: none;
        font-weight: bold;
        width: 10rem;
        height: 3rem;
        color: rgba(255, 255, 255, 0.7);
        border-radius: 8px;
        font-weight: bold;
        border: 0;
        cursor: pointer;
        font-size: 17px;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        &.active{
            background: ${defaultThemes['purple-300']};
            color: white;
        }

        &:not(.active):hover{
            background:#37007a;

        }
    }
`