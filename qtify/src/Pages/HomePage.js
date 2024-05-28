import Navbar from "../Compenents/Navbar";
import HeroImageSection from '../Compenents/HeroImageSection';
import Card from "../Compenents/Card";
import './HomePage.css';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "../API/API";
import { useState, useEffect } from "react"; 

const HomePage = () => {
    
    const [topAlbums,setTopAlbums] = useState();
    const [newAlbums,setNewAlbums] = useState();
    const [songs,setSongs] = useState();

    useEffect(()=>{
        fetchTopAlbums().then(res=>setTopAlbums(res.data));
        fetchNewAlbums().then(res=>setNewAlbums(res.data));
        fetchSongs().then(res=>setSongs(res.data));
    },[])

    return (
        <div className='homepage'>
            <Navbar />
            <HeroImageSection />
            <Card cardData={topAlbums} type={'Top albums'} showAll={true}/>
            {/* <Card cardData={newAlbums} type={'New albums'} showAll={true}/>
            <Card cardData={songs} type={'Songs'}/> */}
        </div>
    )
}

export default HomePage;