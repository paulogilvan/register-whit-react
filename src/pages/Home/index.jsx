import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";
import H1 from "../../components/Title";
import ContainerItems from "../../components/ContainerItems";
import Button from "../../components/Button";
import { Container, Image, InputLabel, Input, } from "./styles";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";


const Home = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  const addNewUser = async () => {
    const { data: newUser } = await axios.post("http://localhost:3000/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);  

    navigate("/users");
  }

  return (
    <Container>
      <Image src={People} alt="logo-image" />
      <ContainerItems>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar <img src={Arrow} alt="seta" /></Button>
      </ContainerItems>
    </Container>
  );
}

export default Home;