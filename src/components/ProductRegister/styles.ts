import styled from "styled-components";
import { defaultThemes } from "../../styles/themes/default";

export const StyledProductRegister = styled.div`
    background-color: ${defaultThemes["purple-300"]};
    height: 5rem;
    width: 100%;
    border-radius: .4rem;
    margin-bottom: .5rem;
    box-sizing: border-box;
    box-shadow: 0 .3rem 0 0 ${defaultThemes["box-blur-100"]};
`;