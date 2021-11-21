import React from 'react'
import { ContainerItems as Container } from './styles'
const ContainerItens = ({ children ,isBlur}) => {
    return (
        <Container isBlur={isBlur}>
            {children}
        </Container>
    )
}

export default ContainerItens
