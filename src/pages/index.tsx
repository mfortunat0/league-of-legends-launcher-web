import {
  Container,
  Form,
  BackgroundImage,
  Logo,
  Title,
  Input,
  InputPassword,
  ButtonMedias,
  ButtonGroup,
  Submit,
  Link,
  LinksContainer,
  WindowButton,
  ContainerWindowButtons,
} from "../styles/index";

import Head from "next/head";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import {
  AiOutlineArrowRight,
  AiOutlineClose,
  AiOutlineQuestion,
} from "react-icons/ai";
import { useState, useRef } from "react";

export default function Home() {
  const [isPossibleLogin, setIsPossibleLogin] = useState(false);
  const inputEmailRef = useRef<HTMLInputElement>();
  const inputPasswordRef = useRef<HTMLInputElement>();

  const changeInputs = () => {
    if (
      inputEmailRef.current.value.length > 0 &&
      inputPasswordRef.current.value.length > 0
    )
      setIsPossibleLogin(true);
    else setIsPossibleLogin(false);
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Form>
          <Logo src="/logo.png" />
          <Title>Fazer Login</Title>
          <Input
            ref={inputEmailRef}
            placeholder="Email"
            onChange={changeInputs}
          />
          <InputPassword
            ref={inputPasswordRef}
            placeholder="Password"
            onChange={changeInputs}
          />
          <ButtonGroup>
            <ButtonMedias background="facebook">
              <FaFacebook />
            </ButtonMedias>
            <ButtonMedias background="google">
              <FaGoogle />
            </ButtonMedias>
            <ButtonMedias background="apple">
              <FaApple />
            </ButtonMedias>
          </ButtonGroup>
          <Submit isPossibleLogin={isPossibleLogin}>
            <AiOutlineArrowRight />
          </Submit>
          <LinksContainer>
            <Link>Criar conta</Link>
            <Link>Não consegue iniciar sessão?</Link>
          </LinksContainer>
        </Form>
        <BackgroundImage source="/week01.jpg">
          <ContainerWindowButtons>
            <WindowButton>_</WindowButton>
            <WindowButton>
              <AiOutlineQuestion />
            </WindowButton>
            <WindowButton>
              <AiOutlineClose />
            </WindowButton>
          </ContainerWindowButtons>
        </BackgroundImage>
      </Container>
    </>
  );
}
