import React, {useState, useEffect} from 'react';
import '../styles/css/values.css';
import DownArrow from '../assets/icons/values-down-arrow.png'
import {ValuesHeader} from '../components/header'

const Values = ()=>{
  
  const [counter, setCounter] = useState(0)
  const [touchStartPoint, setTouchStartPoint] = useState(0);
  const title = ['Openness', 'Service', 'Evaluation', 'experience', 'renounce', 'enjoy', 'diligence'];
  const text = [
    'Only by embracing the unknown and staying open are we free to find solutions we can’t initially imagine.',
    'We try to empathize with the experiences of others, and help out where we can.',
    'We regularly assess the productive value of things and adjust accordingly. We’re not that cool with convention.',
    'Experience is all we really have. We don’t take our’s or others’ lightly.',
    'We live for the process more than the result. And somehow, the result is usually better for it.',
    'We try to find joy in whatever we do.',
    'If something is worth doing, its worth doing wholeheartedly.'
  ];

  const nextValue = ()=>{
    shrinkContent();
    setTimeout(()=>{setCounter(counter + 1)}, 500)
  }
  const prevValue = ()=>{
    shrinkContent();
    setTimeout(()=>{setCounter(counter - 1)}, 500)
  }

  const shrinkContent = ()=>{
      document.getElementById('value-text-div').style.width = 0;
      document.getElementById('value-text').style.bottom = '10px';
      document.getElementById('value-text').style.opacity = 0;
      document.getElementById('value-title').style.opacity = 0;  
  }
  
  const readWheel = (e)=>{
    if(document.getElementById('value-title')){
      window.removeEventListener('wheel', readWheel);
      if(e.deltaY > 0 && counter <= 5){
          nextValue();
        }  
      else if(e.deltaY < 0 && counter >= 1){
        prevValue();
      }}
  }

  const readSwipe = (e)=>{
    // setTimeout(()=>{
      window.removeEventListener('touchend', readSwipe)
      if(e.changedTouches[0].screenY < touchStartPoint - 0 && counter <= 5){
        nextValue();
      }  
      else if(e.changedTouches[0].screenY > touchStartPoint + 0 && counter >= 1){
        prevValue();
      }  
  }
  const touchStart = (e)=>{ setTouchStartPoint(e.changedTouches[0].clientY); }
  const keyReaders = (e)=>{
    window.removeEventListener('keyup', keyReaders);
    if(e.keyCode === 40 && counter <= 5 ){ nextValue() }
    else if(e.keyCode === 38 && counter >= 1){ prevValue() }
  }

useEffect(()=>{
    document.getElementById('value-title').style.opacity = 1;
    document.getElementById('value-text').style.opacity = 1;
    document.getElementById('value-text-div').style.width = '92%';
    document.getElementById('value-text').style.bottom = '0px';
    // 1. On render or state change, styles of changing content are set.
    
    window.removeEventListener('wheel', readWheel)    
    window.removeEventListener('touchend', readSwipe);
    window.removeEventListener('touchstart', touchStart);
    window.removeEventListener('keyup', keyReaders);
    document.getElementById('down-arrow').removeEventListener('click', nextValue);
    
    setTimeout(()=>{
      window.addEventListener('wheel', readWheel)    
    }, 1250)
    // 2. After 1.5s, wheel event listener is added to the window.
    window.addEventListener('touchend', readSwipe);
    window.addEventListener('touchstart', touchStart);
    window.addEventListener('keyup', keyReaders);
    document.getElementById('down-arrow').addEventListener('click', nextValue);
  })
  
  return(
    <div id='page_value' className='page' >
      <ValuesHeader />
      <div id='value-con'>
        <div id='title-and-text'>
          <h1 id='value-title'>{title[counter]}</h1>
          <div id='value-text-div'><p id='value-text'>{text[counter]}</p></div>
        </div>
        <div id='counterAndArrow'>
          <h4 id='value-counter'>{`0${counter + 1}`}/07</h4>
          <img src={DownArrow} id='down-arrow' />
        </div>
      </div>
    </div>
  )
}

export default Values;