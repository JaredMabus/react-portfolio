import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as page from "./pages";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import theme from "./styles/style";


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<page.Home />} />
          <Route path="*" element={<page.Home />} />
        </Routes>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
