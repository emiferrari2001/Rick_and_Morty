import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
export default function Detail (){
    let[character, setCharacter] = useState([]);
    const {id} = useParams();
    // cada vez que se modifica el id se ejecuta el use effect y actualiza componente
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     //console.log(character);
     function renderOrigin(origin) {
        if (origin) {
          return origin.name;
        }
        return null;
      }
    return (
        <div>
            <h1>{character.name}</h1>
            <h3>Status: {character.status}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Species: {character.species}</h3>
            <h3>Origin: {renderOrigin(character.origin)}</h3>
            {/* tambien se puede renderear el origin con un condicional de una linea:
            {character.origin ? `${character.origin.name}` : ''} 
            eso iria despues de "Origin: "*/}
            <img src={character.image} alt="" />
            
        </div>
    )
}