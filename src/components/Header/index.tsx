import { NavLink } from "react-router-dom";
import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <nav>
                <NavLink to="/">RESUMO</NavLink>
                <NavLink to="/sale">VENDA</NavLink>
                <NavLink to="/order">PEDIDOS</NavLink>
            </nav>
        </Container>

            );
}