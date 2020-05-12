import React, {useState, useEffect} from 'react';
import Header from '../header';
// import Overlay from './overlay'
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, engagementNav, identityNav, expectationNav, informationNav, scrollHeader, menuHeader } from '../../actions/index.js'
//imports action creator
import { bindActionCreators } from 'redux'
//imports function needed to use action creator
import { connect } from 'react-redux'
import {Contact} from '../contact'
import fisherman from '../../assets/images/fisherman.png'
import dataImage from '../../assets/images/sec3.jpeg'
import fisherman2 from '../../assets/images/fisherman22.jpg'
import data from '../../assets/images/dining.jpeg'
// import '../../styles/about/about2.css';
// import '../../styles/about/section1.css'
import {PageTitle} from '../header';


export const Sec1 = () =>{
  return(
    <div id='sec1' className='sec'>
      <div id='sec1-titleAndText'>
        <h1 className='sec-title' id='sec1-title'>We see every interaction as a chance to captivate.</h1>
        <p className='sec-text' id='sec1-text'>Customers remember how you make them feel. They expect intuitive products with useful information and capability. Our products aim to deliver in a way that maximizes positive feelings, which clients then associate with your brand.</p>
      </div>
      <div id='sec1-image-div'></div>
    </div>
  )
}

export const Sec2 = ()=>{
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      (window.pageYOffset > document.getElementById('sec2').offsetTop - 700)? document.getElementById('sec2').style.opacity = 1 : document.getElementById('sec2').style.opacity = 0
    })
  })
  
  return(
    <div id='sec2' className='sec'>
      <div id='sec2-titleimage'>
        <h1 className='sec-title' id='sec2-title'>In 2018, 89% of consumers quit a company after a <span style={{textDecoration: 'underline'}}>single</span> poor customer experience.</h1>
      </div>
      <div id='quoteAndText'>
        <p className='sec-text' id='sec2-text'>Customer loyalty is overrated. Today, it’s easier than ever for frustrated customers to check out and try your competitors products. Improving the experience for your customers is no longer an option if you want to compete.</p>
        <div id='sec2-quote-div'>
          <h2 id='sec2-quote-text'> “A little slow, a little late, just once...”</h2>
          <p id='sec2-quote-avon'>- Avon Barksdale</p>
        </div>
      </div>
      
    </div>
  )
}

export const Sec3 = ()=>{
  
  // useEffect(()=>{
  //   window.addEventListener('scroll', ()=>{
  //     (window.pageYOffset > document.getElementById('sec2').offsetTop - 700)? document.getElementById('sec2').style.opacity = 1 : document.getElementById('sec2').style.opacity = 0
  //   })
  // })
  
  return(
    <div id='sec3' className='sec'>
      <div id='sec3-titleAndText'>
        <h1 className='sec-title' id='sec3-title'>Utilizing digital technology creates true advantages.</h1>
        <p className='sec-text' id='sec3-text'>Whatever product or service your business provides, there are virtually always more people that need it. Digital technologies give you unprecedented access to people, and unlimited opportunities to present yourself to potential customers. It’ll also help you  engage with current customers in new and innovative ways.</p>
      </div>
      <div className='sec-image' id='sec3-image'></div>
      {/* <img className='sec-image' id='sec3-image' src={dataImage}/> */}
      
      
    </div>
  )
}






