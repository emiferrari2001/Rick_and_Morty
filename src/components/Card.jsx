export default function Card(props) {
   return (
      <div className="cardPersonaje">
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <p>{props.status}</p>
         <p>{props.species}</p>
         <p>{props.gender}</p>
         <p>{props.origin}</p>
         <img src={props.image} alt='' />
      </div>
   );
}
