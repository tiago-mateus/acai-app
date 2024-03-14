import { Cadastro } from '../../components/Cadastro'
import { Caixa } from '../../components/Caixa'
import { Fila } from '../../components/Fila'
import { Container } from './styles'

export const ResumoPage = () => {
    return (
        <>
            <Container>
                <Fila></Fila>
                <Caixa></Caixa>
                <Cadastro></Cadastro>
            </Container>
        </>
    )
}