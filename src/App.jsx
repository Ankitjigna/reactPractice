import Title from "./Title.jsx";
import "./App.css";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function App() {
  return (
    <>
      <MsgBox userName="Raayan" textColor="yellow"/>
      <ProductTab/>
    </>
  );
}

export default App;
