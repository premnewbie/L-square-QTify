import QtifyLogo from "../Assets/QtifyLogo.png"
import "./Navbar.css";
import SearchBar from "./SearchBar";


const Navbar = () => {

    return (
        <div className='navbar'>
            <img src= {QtifyLogo} alt='QtifyLogo'/>
            <SearchBar />
            <button className='navbarbutton'>
                Give Feedback
            </button>
        </div>
    )
}

export default Navbar;