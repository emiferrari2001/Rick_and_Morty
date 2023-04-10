import { NavLink } from "react-router-dom";
import styles from './Card.module.css'
export default function Card(props) {
   // const handleClick = () => {
   //    console.log("Close button clicked with id", props.id);
   //    props.onClose(props.id);
   //  };
   function ifAlive () {
      if(props.status === 'Alive'){
         return styles.green;
      } else {
         return styles.red;
      }
   }
   
   return (
      <div className={styles.cardPersonaje}>
         <button onClick={() => props.onClose(props.id)} className={styles.botonCard}>x</button>
         <img src={props.image} alt={props.name} />
         <h2 className={styles.linkNombre}><NavLink to={`/detail/${props.id}`}>{props.name}</NavLink> - <span className={ifAlive()}>{props.status}</span></h2>
         <p>Species: {props.species}</p>
         <p>Gender: {props.gender}</p>
         <p>Origin: {props.origin}</p>
         
      </div>
   );
}
