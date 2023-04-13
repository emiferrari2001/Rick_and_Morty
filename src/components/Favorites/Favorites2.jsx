import styles from './Favorites.module.css'
import { connect } from "react-redux";
import { Card } from "../Card/Card";
const Favorites = ({myFavorites})=>{
   

    return(
        <div className={styles.contenedorFavorites}>
        {
            //si hay algo en myfavorites mapeo si no no
            myFavorites?.map(character => {
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
const mapStateToProps = (state) => {
    return{
        myFavorites:state.myFavorites
    }
}

export default connect (
    mapStateToProps,
    null
)(Favorites);