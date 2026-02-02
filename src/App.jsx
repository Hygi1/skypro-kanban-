import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./GlobalStyles";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopExit from "./components/popup/PopExit/PopExit";
import PopNewCard from "./components/popup/PopNewCard/PopNewCard";
import PopBrowse from "./components/popup/PopBrowse/PopBrowse";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
