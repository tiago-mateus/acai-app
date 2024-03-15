import { OrderCard } from "../OrderCard"
import { StyledOrderQueue } from "./styles"

export const OrderQueue = () => {
    return (
        <StyledOrderQueue>
            <OrderCard></OrderCard>
            <OrderCard></OrderCard>
            <OrderCard></OrderCard>
            <OrderCard></OrderCard>
            <OrderCard></OrderCard>
            <OrderCard></OrderCard>
        </StyledOrderQueue>
    )
}