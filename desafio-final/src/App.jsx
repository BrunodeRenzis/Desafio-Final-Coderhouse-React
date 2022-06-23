import './App.css';
import { FooterApp } from './components/FooterApp/FooterApp';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <ItemListContainer/>
      <FooterApp/>
    </div>
  );
}

export default App;
