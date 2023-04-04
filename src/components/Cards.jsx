import Card from './Card';
export default function Cards(props) {
   let {characters} = props;
   return (<div className='contenedorCartas' style={{display:'flex' , flexFlow: 'wrap'}}>
      {
         
         characters.map((personaje) => { // se usa el metodo map para recorrer en react
            return(
               
               <Card 
               key={personaje.id}
               name={personaje.name}
               status={personaje.status}
               species={personaje.species}
               gender={personaje.gender}
               origin={personaje.origin.name}
               image={personaje.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               />        
            )
         })
      }

   </div>)
}
