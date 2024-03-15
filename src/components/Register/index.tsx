import { StyledRegister } from "./styles"
import { ClientRegister } from "../ClientRegister"
import { ProductRegister } from "../ProductRegister"

export const Register = () => {
    return (
        <StyledRegister>
            <ClientRegister></ClientRegister>
            <ProductRegister></ProductRegister>
        </StyledRegister>
    )
}