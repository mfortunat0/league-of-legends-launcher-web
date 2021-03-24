import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
  }
  body {
    padding: 2.5vh 10vw 2.5vh 10vw;
    background-color: #222
  }
`;

const theme = {
  facebook: "#007bef",
  google: "linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335)",
  apple: "#010001",
  submit: "#ee3d3c",
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
