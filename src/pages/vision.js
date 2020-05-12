import React, {useEffect, useState, useCallback, useLayoutEffect} from 'react';
import {HeaderMobile, HeaderDesktop} from '../components/header';
// import Overlay from './overlay'
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, engagementNav, identityNav, expectationNav, informationNav, scrollHeader, menuHeader } from '../actions/index.js'
//imports action creator
import { bindActionCreators } from 'redux'
//imports function needed to use action creator
import { connect } from 'react-redux'
import {Contact} from '../components/contact'
// import fisherman from '../styles/images/fisherman.png'
// import fisherman2 from '../styles/images/fisherman22.jpg'
import data from '../assets/images/dining.jpeg'
// import '../styles/about/about2.css';
import {PageTitle} from '../components/header';
import {Section1, Section1Mobile, Sec1, Sec2, Sec3} from '../components/about/sections'
import littlearrow from '../assets/icons/little-arrow.png';
import '../styles/css/about.css';
//imports function needed to access redux state object

const Vision = ()=> {
  
  const [loadStatus, setLoadStatus] = useState('no')
  
  window.scrollTo(0,0);

  // window.addEventListener('load', ()=>{setLoadStatus('yes')}, [loadStatus])

  // useLayoutEffect(()=>{
  //   window.addEventListener('load', ()=>{setLoadStatus('yes')})
  // })

  // useCallback(
  //   ()=>{}, [loadStatus]
  // )



  // setTimeout()

    return(
      <div id='page_about' style={{opacity:1, transition:'opacity 3s'}}>
        <div id='page-title'><img id='little-arrow' src={littlearrow}/> <h2 id='title-text'>Our Vision</h2></div>
        <Sec1 />
        <Sec2/>
        <Sec3 />
        <Contact message={"Get in touch"}/>
      </div>
      
    )

  // setTimeout()

    
  


  
}

// <h1 id='why-digital-matters'>Why Digital Matters</h1>

// <img src='src/styles/images/arrow.png' className='matters-nav-arrow' style={{transform:'rotate(-90deg)'}}/>

function mapStateToProps(state){
  return{
    books: state.books,
    view: state.view,
    values: state.values,
    header: state.header,
    matterNav: state.matterNav
  }
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ selector: selectBook, overlay: overlay, valueNextPage: valueNextPage, valuePrevPage: valuePrevPage, defaultView: defaultView, defaultHeader: defaultHeader, invertHeader: invertHeader, engagementNav: engagementNav, identityNav: identityNav, expectationNav: expectationNav, informationNav:informationNav, scrollHeader:scrollHeader, menuHeader:menuHeader }, dispatch)
}

// window.addEventListener('scroll', (event)=>{
//   if(window.pageYOffset < 304){
//       this.props.engagementNav();
//     }
//   if(window.pageYOffset >= 304 && window.pageYOffset < 1051){
//       this.props.identityNav();
//       this.setState({identity:1})
//     }
//     if(window.pageYOffset >= 957 && window.pageYOffset < 1416){
//         this.props.expectationNav();
//         this.setState({expectation:1})
//       }
//       if(window.pageYOffset >= 1476 ){
//           this.props.informationNav();
//           this.setState({information:1})
//         }
//   })


export default connect(mapStateToProps, mapDispatchToProps)(Vision)
