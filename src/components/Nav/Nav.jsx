import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from './Nav.module.css'
export default function Nav (props) {
    let {onSearch, logout} = props;
return (
    <div className={styles.navContainer}>
        <div className={styles.contenedorBotones}>
            <button className={styles.botonesNav}><NavLink to='/home'>Home</NavLink></button>
            <button className={styles.botonesNav}><NavLink to='/About'>About</NavLink></button>
            <button onClick={logout} className={styles.botonesNav}><a href="javascript:void(0)"> Log out</a></button>
        </div>
    {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
    <SearchBar onSearch={onSearch}/>
    </div>
)
}