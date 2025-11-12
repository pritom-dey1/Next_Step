import React from 'react';
import Marquee from "react-fast-marquee";
import Spotify from '../../assets/Vector.png';
import Slack from '../../assets/logos.png';
import Adobe from '../../assets/logo.png';
import Linear from '../../assets/logo (2).png';
import Asana from '../../assets/logo (1).png';

const MarqueE = () => {
  return (
    <div className='bg-[#0a65cc] py-4'>
      <Marquee gradient={false} speed={60}>
        <div className='flex items-center justify-between w-[100vw] ml-26'>
          <img src={Spotify} alt="Spotify" className='h-12 object-contain' />
          <img src={Slack} alt="Slack" className='h-12 object-contain' />
          <img src={Adobe} alt="Adobe" className='h-12 object-contain' />
          <img src={Linear} alt="Linear" className='h-12 object-contain' />
          <img src={Asana} alt="Asana" className='h-12 object-contain' />
                    <img src={Slack} alt="Slack" className='h-12 object-contain' />
                              <img src={Adobe} alt="Adobe" className='h-12 object-contain' />


        </div>
      </Marquee>
    </div>
  );
}

export default MarqueE;
