import {useState} from 'react'
export default function SearchBar(props) {
   let {onSearch} = props;
   //console.log(onSearch);
   let [id, setId] = useState('')
   const handleChange = (event) => {
      // como no esta dentro de un objeto ni nada, simplemente piso el valor del string vacio
      setId(event.target.value)
   }
   return (
      <div>
         <input type='search' onChange={handleChange} />
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
