import './App.css';
import { FooterApp } from './components/FooterApp/FooterApp';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar/>
        </header>
        <Routes>
          <Route path=''></Route>
        </Routes>
        <ItemListContainer/>
        <FooterApp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
