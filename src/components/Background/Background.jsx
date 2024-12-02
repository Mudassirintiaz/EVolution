import React from 'react';
import './Background.css';
import video1 from '../../Assets/video1.mp4';
import image1 from '../../Assets/image1.png';
import image2 from '../../Assets/image2.png';
import image3 from '../../Assets/image3.png';

const Background = ({ playStatus, heroCounter }) => {
    if (playStatus) {
        return (
            <video className='background' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>
        );
    } else if (heroCounter === 0) {
        return <img src={image1} className='background fain-in' alt="Background 1" />;
    } else if (heroCounter === 1) {
        return <img src={image2} className='background fain-in' alt="Background 2" />;
    } else if (heroCounter === 2) {
        return <img src={image3} className='background fain-in' alt="Background 3" />;
    } else {
        return <div>No content available</div>;
    }
};

export default Background;
