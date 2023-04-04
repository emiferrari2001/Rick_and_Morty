import { NavLink } from "react-router-dom";
export default function Card(props) {
   // const handleClick = () => {
   //    console.log("Close button clicked with id", props.id);
   //    props.onClose(props.id);
   //  };
   
   
   return (
      <div className="cardPersonaje">
         <button onClick={() => props.onClose(props.id)}>X</button>
         <NavLink to={`/detail/${props.id}`}><h2>{props.name}</h2></NavLink>
         <p>{props.status}</p>
         <p>{props.species}</p>
         <p>{props.gender}</p>
         <p>{props.origin}</p>
         <img src={props.image} alt={props.name} />
      </div>
   );
}
