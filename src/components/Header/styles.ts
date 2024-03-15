import { styled } from "styled-components";
import { defaultThemes } from "../../styles/themes/default";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${defaultThemes["purple-700"]};
    height: 4.7rem;
    border-radius: 15px;
    margin-top: 2rem;

    nav{
        display: flex;
        gap: 1rem;
        padding: 0 1rem 0 1rem;
    }

    a{
        text-decoration: none;
        font-weight: bold;
        width: 8rem;
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