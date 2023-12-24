import { useNavigate } from "react-router-dom"; //Navegar entre página
import axios from "axios";
import { useEffect, useState } from "react";
import H1 from "../../components/Title";
import ContainerItems from "../../components/ContainerItems";
import Button from "../../components/Button";
import { Container, Image, User } from "./styles";
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

const Users = () => {
  const [users, setUsers] = useState([]);  
  const navigate = useNavigate(); //Navegar entre páginas

  useEffect(() => {
    const fetchUsers = async () => {
    const { data: newUsers } = await axios.get("http://localhost:3000/users");
      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3000/users/${userId}`);

    const newUsers = users.filter(user => user.id !== userId);

    setUsers(newUsers);
  }

  const goBackPage = () => { // Função para navegar
    navigate("/");
  }

  return (
    <Container>
      <Image src={Avatar} alt="logo-image" />
      <ContainerItems isBlur={true}>
        <H1>Usuários</H1> 
        <ul>
          {
            users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p> - <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}>
                  <img src={Trash} alt="lixeira" />
                </button>
              </User>
            ))
          }
        </ul>
        <Button isBack={true} onClick={goBackPage}><img src={Arrow} alt="seta" /> Voltar </Button>
      </ContainerItems>
    </Container>
  );
}

export default Users;