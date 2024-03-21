import styled from "styled-components";
import { defaultThemes } from "../../styles/themes/default";

export const StyledOrderCard = styled.div`
    background-color: ${defaultThemes["white-100"]};
    height: 5rem;
    width: 90%;
    border-end-end-radius: .4rem;
    border-top-right-radius: .4rem;
    border-left: .4rem solid;
    border-color: ${defaultThemes["green-100"]};
    margin-bottom: .5rem;
    box-sizing: border-box;
    direction: ltr;
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const StyledIconAndNameOrderCard = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: row;
    padding-left: .5rem;
    padding-top: .8rem;
    align-items: center;
    box-sizing: border-box;

    & > span {
        display: flex;
        background-color: ${defaultThemes["green-100"]};
        color: ${defaultThemes["white-100"]};
        width: 1.356rem;
        height: 1.313rem;
        border-radius: 1rem;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.625rem;
    }

    & > p {
        margin-left: .2rem;
        font-weight: 700;
        font-size: 0.938rem;
    } 
`;


export const StyledProductValue = styled.div`
    width: 100%;
    height: 65%;
    padding-left: .5rem;
    box-sizing: border-box;

    & > p {
        font-weight: 800;
        font-size: 1.875rem;
        color: ${defaultThemes["green-100"]};
    }
`;