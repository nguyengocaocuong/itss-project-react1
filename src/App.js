import { useState } from "react";
import MainContent from "./component/main-content/MainContent";
import Menu from "./component/menu/Menu";

function App() {
  const [id,setId] = useState(1)
  return (
    <div className="App">
      <h1 className="title">QUẢN LÝ CHI TIÊU NHÀ TRỌ</h1>
      <Menu changeId={setId} id={id}/>
      <MainContent id={id}/>
    </div>
  );
}

export default App;
