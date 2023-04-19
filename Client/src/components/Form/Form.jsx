import { useState } from "react";
import validate from "../Validation/validation";
import styles from "./Form.module.css"
const Form = ({login}) => {
    const[userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const[errors, setErrors] = useState({
        email: '',
        password: ''
    })
    const handleChanges = (event)=> {
        setUserData({
            // hago una copia de lo que tengo en user data para no sobreescribir cada vez que se modifica
            ...userData,
            /*uso bracket notation para tomar dentro de la propiedad target del evento
            el nombre de el input que estoy modificando. En base a eso setea el valor.
            Esto sucede con cada cambio que se efectue sobre los inputs. */
            [event.target.name]: event.target.value
        })
        let resultadoValidacion = validate([event.target.name], event.target.value);
        console.log(resultadoValidacion);
        if(resultadoValidacion.email){
            setErrors({
                ...errors,
                email: resultadoValidacion.email,
            })
        } else if (resultadoValidacion.password){
            setErrors({
                ...errors,
                password: resultadoValidacion.password,
            })
        }else {
            setErrors({
                ...errors,
                email: '',
                password: ''
            })
        }
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Form de login</h2>
            <div className={styles.formImage}></div>
            <label htmlFor="email" className={styles.label}>Email: </label>
            <input type="email" name="email" onChange={handleChanges} />
            {errors.email && <p>{errors.email}</p>}
            <br/>
            <label htmlFor="password" className={styles.label}>Password: </label>
            <input type="password" name="password" onChange={handleChanges}/>
            {errors.password && <p>{errors.password}</p>}
            <br/>
            <button className={styles.button}>Submit</button>

        </form>
    )
}
export default Form;