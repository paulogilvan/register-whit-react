import { ContainerItems as Container } from "./styles";

const ContainerItems = ({children, isBlur}) => {
    return <Container isBlur={isBlur}>{children}</Container>
}

export default ContainerItems;