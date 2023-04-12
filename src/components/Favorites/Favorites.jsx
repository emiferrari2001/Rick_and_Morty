import styles from './Favorites.module.css'
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
const Favorites = (props)=>{

    
    const myFavorites = useSelector(state => state.myFavorites);
    return(
        <div className={styles.contenedorFavorites}>
        {
            
            myFavorites.map((character) => {
                return(
                
                <Card 
                key={character.id}
                id={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                origin={character.origin.name}
                image={character.image}
                />        
                )
            })
        }

    </div>
    )

}
export default Favorites;