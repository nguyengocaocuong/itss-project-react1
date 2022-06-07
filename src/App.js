import MainContent from "./component/main-content/MainContent";
import Menu from "./component/menu/Menu";

function App() {
  return (
    <div className="App">
      <h1 className="title">QUẢN LÝ CHI TIÊU NHÀ TRỌ</h1>
      <Menu />
      <MainContent id={0}/>
    </div>
  );
}

export default App;
