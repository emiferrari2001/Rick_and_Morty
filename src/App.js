import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route , useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error';
import Form from './components/Form/Form';


const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'abe77a646af1.79bd8305f7239c2e37af'

function App() { 
   // un estado para trackear los personajes que voy mostrando
   let [characters, setCharacters] = useState([]);
   //hago otro estado para guardar los ids de los personajes
   const [characterIds, setCharacterIds] = useState([]);

   let onSearch = (id) =>{
      let casillaInput = document.querySelector('input');
      console.log(casillaInput.value);
      // recorre el array que tiene los ids. Cada valor recorrido seria un 'character ID'. Devuelve el primer valor que coincida con el id que tengo de parametro
      const foundCharacter = characterIds.find((characterId) => characterId === id);
      if (foundCharacter) {
        window.alert('¡Este personaje ya ha sido agregado!');
        return;
      }
      //va a agregar un nuevo personaje a 'characters'
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
         // en la funcion del estado guarda un array llamando cada vez a la instancia anterior, hace una copia, y agrega el ultimo valor.
         setCharacters((oldChars) => [...oldChars, data]);
         setCharacterIds((oldIds) => [...oldIds, id]);
         casillaInput.value = '';
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   }
   const onClose = (id) => {
      let confirmed = window.confirm('Seguro deseas borrar este personaje?')
      if (confirmed) {      
      //filter devuelve un string por lo que debo convertir a numero
      const charactersFiltered = characters.filter((character) =>
         // el id actual es distinto al que me pasaron por parametro?
         // si es distinto no hace nada
         // si es igual elimina del array set characters si es igual
         character.id !== id);
         setCharacters(charactersFiltered);
      }
   }
   let [access, setAccess] = useState(false);
   const email = 'emiferrari2001@gmail.com'
   const password = 'Password';
   const navigate = useNavigate();

   let login = (userData) => {
      if (userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      } else {
         alert('Las credenciales proporcionadas no existen');
         
      }
   }
   let logout = () => {  
      let confirmacion = window.confirm('¿Seguro deseas cerrar sesión?')
      if (confirmacion) {
         setAccess(false);
         navigate('/');   
      }   
         
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   const location = useLocation();
   return (
      
      <div className='App'>
         {/* si estoy en la pagina inicial, no se muestra el nav */}
         {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>}         
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            {/* Aca al usar el :str representa cualquier palabra que se le pueda poner a la ruta
            los ":" lo convierten en variable */}
            <Route path='/:str' element={<Error/>}/>

         </Routes>
      </div>
   );
}

export default App;
