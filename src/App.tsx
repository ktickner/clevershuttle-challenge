import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { CarList } from "./components/CarList";

import * as S from "./App.styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <S.AppContainer>
        <CarList />
      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;
