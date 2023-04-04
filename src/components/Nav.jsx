import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
export default function Nav (props) {
    let {onSearch} = props;
return (
    <div>
    <button><NavLink to='/'>Home</NavLink></button>
    <button><NavLink to='/About'>About</NavLink></button>
    {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
    <SearchBar onSearch={onSearch}/>
    </div>
)
}