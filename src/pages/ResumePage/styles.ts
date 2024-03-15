import styled from "styled-components";
import { defaultThemes } from "../../styles/themes/default";

export const StyledResumePage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    background: linear-gradient(0deg, ${defaultThemes["purple-200"]}, ${defaultThemes["purple-100"]});
`;
