import { Router } from "./routes/Router";
import { theme } from "./themes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};
