import {useState} from 'react'
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   let {onSearch} = props;
   //console.log(onSearch);
   let [id, setId] = useState('')
   const handleChange = (event) => {
      // como no esta dentro de un objeto ni nada, simplemente piso el valor del string vacio
      setId(event.target.value)
   }
   return (
      <div className={styles.barra}>
         <input type='search' onChange={handleChange} />
         {/* le paso primero el seach con un callback para que se ejecute solamente cuando hago click
         y no automaticamente. Despues, al input, le borro el valor para que pueda escribir otro */}
         <button onClick={() => { onSearch(id); setId(''); }}>Agregar</button>
      </div>
   );
}
