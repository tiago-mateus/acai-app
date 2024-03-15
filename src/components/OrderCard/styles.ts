import styled from "styled-components";
import { defaultThemes } from "../../styles/themes/default";

export const StyledOrderCard = styled.div`
    background-color: ${defaultThemes["white-100"]};
    height: 5rem;
    width: 100%;
    border-end-end-radius: .4rem;
    border-top-right-radius: .4rem;
    margin-bottom: .5rem;
    box-sizing: border-box;
`;