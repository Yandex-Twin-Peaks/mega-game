import React from 'react';
import { useHistory } from 'react-router-dom';

import './Home.pcss';

const Home = () => {
  const history = useHistory();
  return (
    <div className='home__wrapper'>
      {/* <div id='foglayer_01' className='fog'>
        <div className='image01'></div>
        <div className='image02'></div>
      </div>
      <div id='foglayer_02' className='fog'>
        <div className='image01'></div>
        <div className='image02'></div>
      </div>
      <div id='foglayer_03' className='fog'>
        <div className='image01'></div>
        <div className='image02'></div>
      </div> */}
      <div className='home__title-container' onClick={() => history.push('/game')}>
        <p id='shadow'>
          <p id='text'>ИГРАТЬ</p>
          <span id='glow'>ИГР</span><span id='blink'>АТЬ</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
