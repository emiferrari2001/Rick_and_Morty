import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import styles from './Detail.module.css';

export default function Detail (){
    let[character, setCharacter] = useState([]);
    const {id} = useParams();
    const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
   const API_KEY = 'abe77a646af1.79bd8305f7239c2e37af'
    // cada vez que se modifica el id se ejecuta el use effect y actualiza componente
    useEffect(() => {
      
      // viejo:
      //axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
        
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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
        <div className={styles.contenedorDetalle}>
            <div className={styles.contenedorInfo}>
            <h2>{character.name}</h2>

            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <p>Origin: {renderOrigin(character.origin)}</p>
            {/* tambien se puede renderear el origin con un condicional de una linea:
            {character.origin ? `${character.origin.name}` : ''} 
         eso iria despues de "Origin: "*/}
            </div>

            <div className={styles.contenedorFoto}>
            <img src={character.image} alt="" />
            </div>

            
        </div>
    )
}