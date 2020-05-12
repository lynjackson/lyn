import React from 'react';
import '../styles/contact2.css';
import littleArrow from '../assets/icons/little-arrow.png'
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";

export const Contact = (props)=>{
  return(
      <div id='footer' style={{display: (window.location.pathname !== '/') ? 'none' : 'flex'}}>          
          {/* <div id='next-link'> */}
          <Link to='/values' id='next-link' className='nav-option'>
            <h2 id='next-text'>Our Values</h2>
            <img id='little-arrow' src={littleArrow} height={31} width={17}></img>
            </Link>
          {/* </div> */}
      </div>

  )
}
