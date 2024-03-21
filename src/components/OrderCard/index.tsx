import { StyledOrderCard, StyledIconAndNameOrderCard,StyledContainer, StyledProductValue } from "./styles";

export const OrderCard = () => {
    return (
        <StyledOrderCard>
            <StyledContainer>
                <StyledIconAndNameOrderCard>
                    <span>#1</span>
                    <p>TIAGO MATEUS</p>
                </StyledIconAndNameOrderCard>
                <StyledProductValue>
                    <p>R$ 10,00</p>
                </StyledProductValue>
            </StyledContainer>
        </StyledOrderCard>
    );
}