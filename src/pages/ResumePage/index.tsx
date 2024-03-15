import { OrderQueue } from '../../components/OrderQueue'
import { Drawer } from '../../components/Drawer'
import { Register } from '../../components/Register'
import { StyledResumePage } from './styles'

export const ResumePage = () => {
    return (
        <>
            <StyledResumePage>
                <OrderQueue></OrderQueue>
                <Drawer></Drawer>
                <Register></Register>
            </StyledResumePage>
        </>
    )
}