import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../../redux/actions';

const Card = (props) => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites)
  
  console.log('myFavorites');
  console.log(myFavorites);
  
  const ifAlive = () => {
    return props.status === 'Alive' ? styles.green : styles.red;
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      //este es el id del personaje, no del dispatch
      dispatch(removeFav(props.id));
    } else {
      setIsFav(true);
      dispatch(addFav(props))
    }
  };

  useEffect(() => {
   myFavorites.forEach((fav) => {
     console.log('arranca componente card');
      if (fav.id === Number(props.id)) {
        console.log(fav.id === Number(props.id))
         setIsFav(true);
      }
   });
}, [myFavorites]);

  return (
    <div className= {styles.cardPersonaje}>
      
      {/* habria que hacer renderizado condicional si hay onclose para favorites */}
      <button onClick={() => props.onClose(props.id)} className={`${styles.botonCard} otroClassName`}>
        x
      </button>
      <img src={props.image} alt={props.name} />
      <h2 className={styles.linkNombre}>
        <NavLink to={`/detail/${props.id}`}>{props.name}</NavLink> -{' '}
        <span className={ifAlive()}>{props.status}</span>
      </h2>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
      <p>Origin: {props.origin}</p>
      <div>
        {isFav ? (
          <button onClick={handleFavorite} className= {styles.corazon}>❤️</button>
        ) : (
          <button onClick={handleFavorite} className= {styles.corazon}>🤍</button>
        )}
      </div>
    </div>
  );
};

export { Card };