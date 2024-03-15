import styled from "styled-components";
import { defaultThemes } from "../../styles/themes/default";

export const StyledOpenDrawer = styled.div`
    display: flex;
    flex-direction: row;
    height: 7rem;
    width: 100%;
    background-color: ${defaultThemes["green-100"]};
    border-radius: .4rem;
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 2rem;
    align-items: center;
    justify-content: center;
`;