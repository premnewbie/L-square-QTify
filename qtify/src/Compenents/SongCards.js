import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const SongCards =({cardData}) =>{
    const [filterData,setFilterData] = useState();
    const [value, setValue] = useState('All');

    useEffect(()=>{
        if(value!=='All'){
            setFilterData(cardData.filter((card)=>card.genre.label===value))
            console.log(filterData)
            return
        } else{
            setFilterData(cardData)
            console.log(filterData)
        }
    },[value])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    

    return(
        <>
            <div className='song-header'>
                    <h3 id='header-name'>Songs</h3>
            </div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider',color:'white' }}>
                <Tabs value={value} onChange={handleChange} aria-label='basic tabs' 
                TabIndicatorProps={{style: { backgroundColor: "#34c94b" }
                }} textColor='inherit' >
                    <Tab value="All" label="All" />
                    <Tab value="Rock" label="Rock" />
                    <Tab value="Pop" label="Pop" />
                    <Tab value="Jazz" label="Jazz" />
                    <Tab value="Blues" label="Blues" />
                </Tabs>
            </Box>
            <Swiper slidesPerView={6} 
            spaceBetween={30}
            navigation={true} 
            modules={[Navigation]}
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-navigation-size": "20px",
            }}
            loop={true}
            className="mySwiper"
            >
                {filterData?.map((card)=>
                        <SwiperSlide>
                        <div className='card' key={card.id}>
                            <img src={card.image} alt={card.title} />
                            <div className='card-content'>
                                <p>{card.likes} likes</p>
                            </div>                        
                            <p id='card-caption'>{card.title}</p>
                        </div>
                        </SwiperSlide>)
                    }
            </Swiper>
        </>
    )
}

export default SongCards;