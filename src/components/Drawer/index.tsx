import { StyledDrawer } from "./styles"
import { CashDrawer } from "../CashDrawer"
import { OpenDrawer } from "../OpenDrawer"

export const Drawer = () => {
    return (
        <StyledDrawer>
            <CashDrawer></CashDrawer>
            <OpenDrawer></OpenDrawer>
        </StyledDrawer>
    )
}