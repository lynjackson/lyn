import React, {useState, useEffect} from 'react';
import '../styles/css/values.css';
import DownArrow from '../assets/icons/values-down-arrow.png'
import deb from 'lodash.debounce';
import thot from 'lodash.throttle';

const Values = ()=>{
  
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
  
  const [counter, setCounter] = useState(0)
  const [valueTitle, setTitle] = useState(title[counter])
  const [valueText, setText] = useState(text[counter])
  const [stateChange, setStateChange] = useState(0);

  const [swipeDirection, setSwipeDirection] = useState(0);
  
  
  const valueUp = ()=>{
    document.getElementById('value-title').style.opacity = 0;
    document.getElementById('value-text').style.opacity = 0;  
    setTimeout(()=>{
      setCounter(counter + 1)
      document.getElementById('value-title').style.opacity = 1;
      document.getElementById('value-text').style.opacity = 1;  
    }, 200)
  }      
  
  const valueDown = ()=>{
    document.getElementById('value-title').style.opacity = 0;
    document.getElementById('value-text').style.opacity = 0;  
    setTimeout(()=>setCounter(counter - 1), 200)
  }      
  
useEffect(()=>{
    
    document.getElementById('value-title').style.opacity = 1;
    document.getElementById('value-text').style.opacity = 1;
    
    const funky = (e)=>{
      
      setTimeout(()=>{
        if(e.deltaY > 0 && counter <= 5){
          valueUp();
        }  
        else if(e.deltaY < 0 && counter >= 1){
          valueDown();
        }
      }, 300)
      window.removeEventListener('wheel', funky)
    }

    const swiper = (e)=>{
      setTimeout(()=>{
        if(e.changedTouches[0].clientY > swipeDirection + 100 && counter <= 5){
          valueUp();
        }  
        else if(e.changedTouches[0].clientY < swipeDirection - 100 && counter >= 1){
          valueDown();
        }
      }, 300)
      window.removeEventListener('touchend', swiper)
    }

    // const clicker = () =>{
    //   (counter <= 5) ? valueUp():console.log('nah')
    //   window.removeEventListener('click', clicker)
    // }
    
    setTimeout(()=>{
      window.addEventListener('wheel', funky)    
    }, 1500)

    window.addEventListener('touchstart', (e)=>{
      setSwipeDirection(e.changedTouches[0].clientY)
    })
    
    window.addEventListener('touchend', swiper)

    // window.addEventListener('click', clicker)


  })
  
  return(
    <div id='page_value' className='page' >
      <div id='value-con'>
        <h1 id='value-title'>{title[counter]}</h1>
        <p id='value-text'>{text[counter]} </p>
        <div id='counterAndArrow'>
          <h4 id='value-counter'>{`0${counter + 1}`}/07</h4>
          <img src={DownArrow}  onClick={()=>{(counter <= 5) ? valueUp():console.log('nah')}}/>
        </div>
      </div>
    </div>
  )
}

export default Values;