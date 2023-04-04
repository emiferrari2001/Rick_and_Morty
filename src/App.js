import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import React, { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
 
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
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
         character.id !== Number(id));
         setCharacters(charactersFiltered);
      }
   }

   return (
      
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/' element={<Cards characters={characters} onClose={onClose} />}/>
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
