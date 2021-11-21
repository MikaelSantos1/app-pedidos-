import { Container, Image, User, OrderContainer } from './styles'

import Burguer from '../../assets/burger2.png'
import Trash from '../../assets/trash.svg'
import axios from 'axios'
import H1 from '../../components/Title/index'
import ContainerItens from '../../components/ContainerItens/index'
import { useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import Button from '../../components/Button/index'
function Users() {

  const [users, setUsers] = useState([])

  const history = useHistory()

  function goBackPage() {
    history.push('/')
  }

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3001/order/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get('http://localhost:3001/order')
      setUsers(newUsers)
    }
    fetchUsers()
  }, [])

  return (
    <Container>
      <Image src={Burguer} alt="burguer" />
      <ContainerItens >

        <H1>Pedidos</H1>

        <ul>
          {users.map((user, i) => (
            <User key={user.id}>
              <OrderContainer>
                <p>{user.order}</p>
                <h3>{user.name}</h3>

              </OrderContainer>
              <button onClick={() => deleteUser(user.id)}> <img src={Trash} alt="thrash" /> </button>
            </User>
          ))
          }
        </ul>

        <Button onClick={goBackPage} isBack={true}> Voltar   </Button>

      </ContainerItens >


    </Container>
  );
}

export default Users;
