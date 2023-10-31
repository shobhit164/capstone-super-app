import React, { useEffect, useState } from 'react'
import timerCss from '../styles/timer.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import arrow from '../assets/arrow.png'

function Timer() {
  let [hr, setHr] = useState('00')
  let [min, setMin] = useState('00')
  let [sec, setSec] = useState('00')
  let [status, setStatus] = useState(false)

  
  function toggleBtn(){
    setStatus(!status)
  }

  function incrementHr(){
    if (parseInt(hr) + 1 < 10) {
      setHr(`0${parseInt(hr) + 1}`);
    } else {
      setHr(parseInt(hr) + 1);
    }
  } 
  function decrementHr(){

    if(parseInt(hr) == 0){
      return
    }

    if (parseInt(hr) - 1 < 10) {
      setHr(`0${parseInt(hr) - 1}`);
    } else {
      setHr(parseInt(hr) - 1);
    }
  } 

  function incrementMin(){

    if(parseInt(min) === 59){
      setMin(`0${parseInt(min) + 1}`);
      setHr(`0${parseInt(hr) + 1}`);
      setMin('00');
      return
    }
    
    if (parseInt(min) + 1 < 10) {
      setMin(`0${parseInt(min) + 1}`);
    } else {
      setMin(parseInt(min) + 1);
    }
  } 
  function decrementMin(){

    if(parseInt(min) == 0){
      return
    }

    if (parseInt(min) - 1 < 10) {
      setMin(`0${parseInt(min) - 1}`);
    } else {
      setMin(parseInt(min) - 1);
    }
  } 

  function incrementSec(){

    if(parseInt(sec) === 59){
      setMin(`0${parseInt(min) + 1}`);
      setSec('00');
      return
    }

    if (parseInt(sec) + 1 < 10) {
      setSec(`0${parseInt(sec) + 1}`);
    } else {
      setSec(parseInt(sec) + 1);
    }
  } 
  function decrementSec(){

    if(parseInt(sec) == 0){
      return
    }

    if (parseInt(sec) - 1 < 10) {
      setSec(`0${parseInt(sec) - 1}`);
    } else {
      setSec(parseInt(sec) - 1);
    }
  } 


  return (
    <div className={timerCss.timer}>
      <Clock hr={hr} min={min} sec={sec} status={status}></Clock>
      
      <div className={timerCss.time_setter}>

        <div style={{width: '100%'}} className={timerCss.flex}>
          <span style={{fontSize: 'x-large', color: '#949494'}}>Hours</span>
          <span style={{fontSize: 'x-large', color: '#949494'}}>Minutes</span>
          <span style={{fontSize: 'x-large', color: '#949494'}}>Seconds</span>
        </div>

        <div style={{width: '100%'}} className={timerCss.flex}>
          <img style={{marginLeft: '4%'}} src={arrow} alt=""  onClick={incrementHr}/>
          <img style={{marginRight: '3%'}} src={arrow} alt="" onClick={incrementMin} />
          <img style={{marginRight: '8%'}} src={arrow} alt="" onClick={incrementSec} />
        </div>

        <div style={{width: '100%'}} className={timerCss.flex}>
          <input readOnly style={{outline: 'none', backgroundColor: 'transparent', border: 'none', color: '#fff', marginLeft: '1%' ,width: '3rem', fontSize: 'xx-large', textAlign: 'center'}} placeholder={'00'} value={hr} type="number" /> 

          <span style={{fontSize: '2.5rem'}}>:</span>

          <input readOnly style={{outline: 'none', backgroundColor: 'transparent', border: 'none', color: '#fff', marginRight: '3%' ,width: '3rem', fontSize: 'xx-large', textAlign: 'center'}} placeholder='00' value={min} type="number" />

          <span style={{fontSize: '2.5rem'}}>:</span>

          <input readOnly style={{outline: 'none', backgroundColor: 'transparent', border: 'none', color: '#fff',marginRight: '5%' ,width: '3rem', fontSize: 'xx-large', textAlign: 'center'}} placeholder={'00'} value={sec} type="number" />
        </div>

        <div style={{width: '100%'}} className={timerCss.flex}>
          <img style={{marginLeft: '4%', rotate: '180deg'}} src={arrow} alt="" onClick={decrementHr} />
          <img style={{marginRight: '3%', rotate: '180deg'}} src={arrow} alt="" onClick={decrementMin} />
          <img style={{marginRight: '8%', rotate: '180deg'}} src={arrow} alt="" onClick={decrementSec} />
        </div>

        <button style={{width: '100%', borderRadius: '2rem' , backgroundColor: '#FF6A6A', fontSize: '1.5rem'}} onClick={toggleBtn}>{status ? 'Pause' : 'Start'}</button>

      </div>

    </div>
  )
}


const Clock = ({hr, min, sec, status}) => {
  const totalTime = parseInt(hr) * 3600 + parseInt(min) * 60 + parseInt(sec);
  return (
    <CountdownCircleTimer
      isPlaying={status}
      duration={totalTime}
      colors={['#004777', '#F7B801', '#A30000', '#FF6A6A']}
      colorsTime={[7, 5, 2, 0]}
    >
      {({ remainingTime }) => {
        const hr = Math.floor(remainingTime / 3600);
        const min = Math.floor((remainingTime % 3600) / 60);
        const sec = remainingTime % 60;
        
        const formattedTime = `${(hr.toString().padStart(2, '0'))}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

        return (
          <div>
            <div style={{ fontSize: '2rem' }}>{formattedTime}</div>
          </div>
        );
      }}
    </CountdownCircleTimer>

  );
};

export default Timer