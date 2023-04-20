import styles from './Favorites.module.css'
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../Card/Card";
import { filterCards, orderCards, resetFavs } from '../../redux/actions';
import { useState, useEffect } from 'react';

const Favorites = (props)=>{
    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites);
    //const allCharacters = useSelector(state => state.allCharacters);

    const [aux, setAux] = useState(false);

    
    const handleOrder = (event) => {
        console.log(event.target.value)
        dispatch(orderCards(event.target.value))
        setAux(true);
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    useEffect(() => {
        return () => dispatch(resetFavs())
    },[])

    return(
        <div className={styles.contenedorTodo}>
            <div className={styles.contenedorFiltro}>
                <select name="order" onChange={handleOrder}>
                <option value="" disabled selected hidden>Elige un orden</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select name="gender" onChange={handleFilter}>
                <option value="" disabled selected hidden>Elige un género</option>
                    <option value="Todos">Todos</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className={styles.contenedorFavorites}>
            {
                //si hay algo en myfavorites mapeo si no no
                myFavorites?.map((character) => {
                    return(
                    
                    <Card 
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    gender={character.gender}
                    origin={character.origin}
                    image={character.image}
                    />        
                    )
                })
            }

        </div>
    </div>
    )

}
export default Favorites;