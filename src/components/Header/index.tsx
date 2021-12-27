import logoImg from "../../assets/logo.svg";

import { ButtonTransaction, Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <ButtonTransaction onClick={onOpenNewTransactionModal}>
          Nova Transação
        </ButtonTransaction>
      </Content>
    </Container>
  );
}
