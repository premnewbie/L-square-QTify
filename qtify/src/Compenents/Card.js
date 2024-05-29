import './Card.css';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SongCards from './SongCards';
import { Tooltip } from '@mui/material';


const Card = ({cardData,type,showAll}) => {
    const [show,setShow] = useState();

    const [showOrCollape,setShowOrCollape] = useState();

    useEffect(()=>{
        setShow(showAll)
    },[])

    useEffect(()=>{
        if(show){
            setShowOrCollape('Collapse')
        }else{
            setShowOrCollape('Show All')
        }
    },[show])

    

    return (  
        <>
            {type!=='Songs' && <div className='album-header'>
                <h3 id='header-name'>{type}</h3>
                <h3 id='show-collapse' onClick={()=>setShow(!show)}>{showOrCollape}</h3>
            </div>}
            {type!=='Songs' && show && <div className='card-container'>
            {cardData?.map((card)=>(
                <Tooltip title={`${card.songs?.length} songs`} placement='top' arrow>
                    <div className='card' key={card.id}>
                        <img src={card.image} alt={card.title} />
                        <div className='card-content'>
                            <p>{type!=='Songs' && card.follows} Follows</p>
                        </div>                        
                        <p id='card-caption'>{card.title}</p>
                    </div>
                </Tooltip>
            ))}
            </div>}
            {type!=='Songs' && !show &&
            <Swiper slidesPerView={6} 
            spaceBetween={30}
            navigation={true} 
            modules={[Navigation]}
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-navigation-size": "20px",
              }}
            loop={false}
            className="mySwiper"
            >
                {cardData?.map((card)=>
                    <SwiperSlide>
                        <Tooltip title={`${card.songs?.length} songs`} placement='top' arrow>
                            <div className='card' key={card.id}>
                                <img src={card.image} alt={card.title} />
                                <div className='card-content'>
                                    <p>{card.follows} Follows</p>
                                </div>                        
                                <p id='card-caption'>{card.title}</p>
                            </div>
                        </Tooltip>
                    </SwiperSlide>)
                }
            </Swiper>
            }
            {type==='Songs' && <SongCards cardData={cardData}/>}
        </>
    )
}

export default Card;