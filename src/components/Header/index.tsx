import { NavLink } from "react-router-dom";
import { StyledHeader } from "./styles";

export function Header() {
    return (
        <StyledHeader>
            <nav>
                <NavLink to="/">RESUMO</NavLink>
                <NavLink to="/sale">VENDA</NavLink>
                <NavLink to="/order">PEDIDOS</NavLink>
            </nav>
        </StyledHeader>

            );
}