import SearchBar from "./SearchBar";
export default function Nav (props) {
    let {onSearch} = props;
return (
    <div>
    {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
    <SearchBar onSearch={onSearch}/>
    </div>
)
}