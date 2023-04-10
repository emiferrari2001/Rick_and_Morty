import Card from '../Card/Card';
import styles from './Cards.module.css'
export default function Cards(props) {
   let {characters} = props;
   return (<div className={styles.contenedorCartas}>
      {
         
         characters.map((personaje) => { // se usa el metodo map para recorrer en react
            return(
               
               <Card 
               key={personaje.id}
               id={personaje.id}
               name={personaje.name}
               status={personaje.status}
               species={personaje.species}
               gender={personaje.gender}
               origin={personaje.origin.name}
               image={personaje.image}
               onClose={props.onClose}
               />        
            )
         })
      }

   </div>)
}
