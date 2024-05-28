import SearchIcon from "../Assets/SearchIcon.png";
import "./SearchBar.css";

const SearchBar = () => {
    return (
        <>
        <div className='searchbar'>
            <input type='text' className='searchbarinput' placeholder='Search a album of your choice' />
            <button className='searchbarbutton'>
                <img src={SearchIcon} alt='searchicon'/>
            </button>
        </div>
        
        </>
    )
}
export default SearchBar;