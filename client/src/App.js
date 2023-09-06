import './App.css';
import Cards from './components/Cards/Cards';
import NavBar from './components/Nav/NavBar';
import Window from './components/Nav/SearchBar/Window/Window'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3001/rickandmorty";



function App() {
  const URL_BASE = '/character/';
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const [window, setWindow] = useState(
    {
      status:false,
      error:'',
      key:1
    }
  );

  function login(){
    setAccess(true);
    navigate('/home');
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  function onClose(id){
    setCharacters(characters.filter(character => character.id !== Number(id)));
  }

  async function onSearch(id) {
    if ((characters.find(character => character.id === Number(id)))) {
      //personaje repetido
      setWindow({
        status: true,
        error:'repetido',
        key:window.key+1
      })
      return;
    }

    try {
      const {data} = await axios(`${URL_BASE}${id}`);
      data.name && setCharacters((oldChars) => [...oldChars, data]);
    } catch (error) {
      //no hay personaje con ese id
      setWindow({
        status: true,
        error:'noExiste',
        key:window.key+1
      })
    }
  }

  function closeWindow(){setWindow(false)}

  return (
    <div className='App'>
      {pathname !== '/' && <NavBar onSearch={onSearch}/>}
      {window.status && <Window key={window.key} closeWindow={closeWindow} error={window.error}/>}
      <Routes>
        <Route path='/' element={<Login login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
