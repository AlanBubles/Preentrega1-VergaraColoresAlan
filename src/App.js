
import './App.css';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContainer greeting={"Bienvendios Ajedrecistas"}/>
      </header>
    </div>
  );
}

export default App;
