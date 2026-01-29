import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopExit from "./components/popup/PopExit/PopExit";
import PopNewCard from "./components/popup/PopNewCard/PopNewCard";
import PopBrowse from "./components/popup/PopBrowse/PopBrowse";

function App() {
  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </div>
  );
}

export default App;
