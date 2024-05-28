import './Card.css';
import { useState, useEffect } from 'react';


const Card = ({cardData,type,showAll}) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
      };

    const [showAllCards,setShowAllCards] = useState();

    const [containerName,setContainerName] = useState();

    const [headerName,setHeaderName] = useState();

    const [likesOrFollow,setLikesOrFollow] = useState();

    useEffect(()=>{
        if(showAll){
            setShowAllCards('Show all')
            setContainerName('card-container')
        }else{
            setShowAllCards('Collapse all')
            setContainerName("slider-container")
        }
        if(type==='Songs'){
            setLikesOrFollow('Likes')
        }else{
            setLikesOrFollow('Follows')
        }
        setHeaderName(type)
    },[])

    return (  
        <>
            <div className='card-header'>
                <h3 id='header-name'>{headerName}</h3>
                <h3 id='show-collapse'>{showAllCards}</h3>
                {type==='songs' &&<h3 id='show-collapse'>{showAllCards}</h3>}
            </div>
            {showAll && <div className={containerName}>

                    {cardData?.map((card)=>
                    (<div className='card' key={card.id}>
                        <img src={card.image} alt={card.title} />
                        <div className='card-content'>
                            <p>{type==='Songs'?card.likes:card.follows} {likesOrFollow}</p>
                        </div>                        
                        <p id='card-caption'>{card.title}</p>
                    </div>
                    ))}    
            </div>}
            
        </>
    )
}

export default Card;