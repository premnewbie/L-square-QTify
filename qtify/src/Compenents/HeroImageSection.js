import HeroImage from '../Assets/HeroImage.png';
import './HeroImageSection.css';

const HeroImageSection =() => {

    return (
        <>
            <div className='heroimagesection'>
                <div className='herotext'>
                    <p>100 Thousand Songs, ad-free</p>
                    <p>Over thousands podcast episodes</p>
                </div>
                <img src={HeroImage} alt='heroimage' />
            </div>
        </>
    )
}

export default HeroImageSection;