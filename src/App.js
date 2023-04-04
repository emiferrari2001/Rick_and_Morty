import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import React, { useState } from 'react';
import axios from 'axios';
 
function App() { 
   // un estado para trackear los personajes que voy mostrando
   let [characters, setCharacters] = useState([]);
   //hago otro estado para guardar los ids de los personajes
   const [characterIds, setCharacterIds] = useState([]);
   
   let onSearch = (id) =>{
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
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
