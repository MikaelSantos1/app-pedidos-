import { Container, Image, InputLabel, Input } from './styles'
import Burger from '../../assets/burger1.png'
import { useHistory } from 'react-router'
import axios from 'axios'
import { useState, useRef } from 'react'
import { H1 } from '../../components/Title/style'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button/index'
function Home() {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const history = useHistory()
  const addNewUser = async () => {

    if (inputName.current.value.length && inputAge.current.value.length) {
      const { data: newUser } = await axios.post('http://localhost:3001/order',
        {
          order: inputName.current.value,
          name: inputAge.current.value
        })
      history.push('/users')
      setUsers([...users, newUser])
    }
    else { history.push('/') }

  }

  return (
    <Container>
      <Image src={Burger} alt="people" />
      <ContainerItens >
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input placeholder="Pedido" ref={inputName} />

        <InputLabel>Nome do cliente:</InputLabel>
        <Input placeholder="Nome" ref={inputAge} />
        <Button onClick={addNewUser} >Novo Pedido </Button>

      </ContainerItens >
    </Container>
  );
}

export default Home;
