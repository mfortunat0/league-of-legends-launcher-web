import styled from "styled-components";

interface IButton {
  background: string;
}

interface ISubmit {
  isPossibleLogin: boolean;
}

interface IBackgroundImage {
  source: string;
}

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  height: 95vh;
  background-color: white;
`;

export const Form = styled.form`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 5vh 4vw 4vh 4vw;
  flex-direction: column;
`;

export const BackgroundImage = styled.div<IBackgroundImage>`
  width: 65%;
  height: 100%;
  background: url(${(props) => props.source});
  background-size: cover;
`;

export const Logo = styled.img`
  height: 55px;
  width: 70px;
`;

export const Title = styled.h1`
  margin: 10vh 0 5vh 0;
  font-weight: 700;
`;

export const Input = styled.input.attrs({ type: "text" })`
  margin: 1vh 0 1vh 0;
  padding: 15px;
  border: unset;
  outline: unset;
  border-radius: 2px;
  background-color: #f1f1f1;
  width: 100%;
`;

export const InputPassword = styled.input.attrs({ type: "password" })`
  margin: 1vh 0 1vh 0;
  padding: 15px;
  border: unset;
  outline: unset;
  border-radius: 2px;
  background-color: #f1f1f1;
  width: 100%;
`;

export const ButtonMedias = styled.button<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 30px;
  font-size: 20px;
  margin-top: 1vh;
  border-radius: 8px;
  border: unset;
  background: ${(props) => props.theme[props.background]};
  cursor: pointer;
  color: white;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Submit = styled.button.attrs({ type: "submit" })<ISubmit>`
  margin-top: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  padding: 10px;
  background-color: ${(props) =>
    props.isPossibleLogin ? props.theme.submit : "transparent"};
  border: 0.5px solid #ccc;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
  color: ${(props) => (props.isPossibleLogin ? "#fff" : "#ccc")};
  transition: background-color 0.3s ease-in-out;
`;

export const LinksContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Link = styled.a`
  text-decoration: unset;
  color: #999;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    color: #555;
  }
`;

export const ContainerWindowButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const WindowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #fff;
  border: unset;
  outline: unset;
  font-size: 20px;
  margin: 1vh 0.5vw 1vh 0.5vw;
  cursor: pointer;
`;
