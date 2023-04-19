import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const Card = (props) => {
const {addFav, removeFav, myFavorites} = props;

//console.log();
const [isFav, setIsFav] = useState(false);
  //const dispatch = useDispatch();
  //const myFavorites = useSelector(state => state.myFavorites)D

  const ifAlive = () => {
    return props.status === 'Alive' ? styles.green : styles.red;
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      //este es el id del personaje, no del dispatch
      removeFav(props.id);
    } else {
      setIsFav(true);
      addFav(props)
    }
  };

  useEffect(() => {
    if (myFavorites) {
      myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }
  }, [myFavorites]);

  return (
    <div className={styles.cardPersonaje}>
      <div>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <button onClick={() => props.onClose(props.id)} className={styles.botonCard}>
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
    </div>
  );
};

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // le tengo que poner un nombre distinto a props pero sigue haciendo referencia al objeto que se esta mandando desde handleFavorite
        // por "character" se manda name, species, gender, etc
        addFav: (character) => {dispatch(addFav(character))},
        //el que se despacha es el removeFav que trajimos de actions
        // el removefav del objeto que estoy creando (el que esta antes de los dos puntos) es el q despues recibo por props
        removeFav: (id) => {dispatch(removeFav(id))}
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card)