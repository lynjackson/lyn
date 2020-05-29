import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import '../styles/css/header2.css';
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";
import ethey from '../assets/icons/header/logo-semibold.png';
import menuButton from '../assets/icons/header/menu.png'
import closeX from '../assets/icons/header/closeX.png'
import plus from '../assets/images/plus-sign.png';


export const Header = (props)=>{
  
  //component variables
  const menuOpen = { height: '100vh', background: 'linear-gradient(#212121, #3D3D3D)', }
  const defaultHeader = { height: 58.67, background: props.headerBackground, }

  const MenuButtonStyle = { display:'flex', width:26.63, height: 17.08, zIndex: 100 }
  const closeXStyle = { display:'flex', width:18.83, height: 19.29, zIndex: 100 }

  //component state(s)
  const [navOpStyle, setNavOpStyle] = useState({
    display: 'none',
    opacity: 0
  });
  
  const [headerStyle, setHeaderStyle] = useState({
    height: 58.67,
    background: props.headerBackground
  });
  
  const [menuOption, changeMenuOption] = useState({
    icon: menuButton,
    style:{ display:'flex', width:26.63, height: 17.08, zIndex: 100 }
  });  
  
  //DOM work
  useEffect(()=>{
    document.getElementById('header').addEventListener('wheel', (e)=>{
      if(headerStyle.height === '100vh'){ e.preventDefault() }
    }, {passive: true})
  })
  
  //rendered content
  return (
    <div id='header' style={headerStyle}>
      <div id='header-items2' style={{justifyContent: props.headerItemsJustifyContent}}>
        
      <a href='https://lynjackson.github.io/ethe_design/'><img src={ethey} id='logo2' style={{visibility:props.logoVis}} /></a>
        
        <img src={menuOption.icon} style={menuOption.style} onClick={()=>{
          if(headerStyle.height === 58.67){
            setHeaderStyle(menuOpen);
            setNavOpStyle({display:'flex', opacity:0});
            setTimeout(()=>{setNavOpStyle({opacity:1}); changeMenuOption({icon: closeX, style: closeXStyle})}, 250)
         }
         else{
          setHeaderStyle(defaultHeader)
          setNavOpStyle({ display:'none', opacity:0 });
          changeMenuOption({icon: menuButton, style: MenuButtonStyle});
         }
        }}/>
      </div>
      
      <div id='nav-options' style={navOpStyle}>
        <a href='https://lynjackson.github.io/ethe_design/' className='nav-option'><h2>home</h2></a>
        <hr id='divider' style={{borderWidth:1, borderColor:'#A3A3A3', width:'100%'}}/>
        <Link to='/ethe_design/values' className='nav-option'  ><h2>our values</h2></Link>
      </div>
    
    </div>
  )
}

export const HomeHeader = ()=>{
  return(
    <Header logoVis='hidden' headerItemsJustifyContent='flex-end' headerBackground='rgba(0,0,0,0)'/>
  )
}

export const ValuesHeader = ()=>{
  return(
    <Header logoDisplay='flex' headerItemsJustifyContent='space-between' headerBackground='rgba(0,0,0,0)'/>
  )
}

export const LynHeader = ()=>{
  return(
    <Header logoDisplay='flex' headerItemsJustifyContent='space-between' headerBackground='linear-gradient(#212121, #3D3D3D)'/>
  )
}





















export const HomeHeader2 = ()=>{
  
  const blackish = 'rgb(26,26,26)'
  const whitish = 'rgb(244,244,244)'

  const [headerBackground, setBack] = useState((window.location.pathname === '/ethe_design' && window.pageYOffset < 5) ? 'hsla(0,0,96, 1)' : blackish)
  const [headerHeight, setHeight] = useState(58.67)
  const [stateDisplay, setStateDisplay] = useState('none')
  const [stateJustify, setStateJustify] = useState('center')
  const [statePadding, setStatePadding] = useState(0)
  const [offset, setOffset] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [headerStyle, setHeaderStyle] = useState({
    height: 58.67,
    justifyContent: 'center',
    paddingTop: 0,
    background: 'rgba(0,0,0,0)'
  });

  console.log(screenWidth, 'screenWidth');
  
  
  useEffect(()=>{
    window.addEventListener('resize', (e)=>{
      setScreenWidth(window.innerWidth);
    })
    
    window.addEventListener('scroll', (e)=>{
      setOffset(window.pageYOffset);
      console.log(offset, 'offset')
    })
    // document.getElementById('home-header').addEventListener('wheel', (e)=>{
    //   if(headerHeight === '100vh'){ e.preventDefault() }
    // })
  })
  
  return (
    <div id='home-header' style={{height: headerHeight, justifyContent: stateJustify, paddingTop:statePadding, background: (headerHeight < 60 && window.location.pathname === '/ethe_design') ? 'rgba(0,0,0,0)' : 'linear-gradient(red, blue)' }}>
      <div id='header-items2' >
        
        <img src={menuButton} style={{display:'flex'}}  id='menu2' onClick={()=>{
          if(headerHeight === 58.67){
            setStateJustify('flex-start')
            setStatePadding(11)
            setHeight('100vh');
            setStateDisplay('flex')
         }
         else{
            setHeight(58.67)
            setStateDisplay('none')
            setTimeout(()=>{setStateJustify('center'); setStatePadding(0)}, 500)
         }
        }}/>
      
      </div>
      
      <div id='nav-options' style={{display:stateDisplay}}>
        <Link to='/ethe_design/values' className='nav-option'  onClick={()=>{setHeight(58.67); setBack(blackish)}}><h2>our values</h2></Link>
        <hr id='divider' style={{borderWidth:1, borderColor:'#A3A3A3', width:'100%'}}/>
        <Link to='/ethe_design/lyn' className='nav-option' onClick={()=>{setHeight(58.67); setBack(blackish)}}><h2>our designer</h2></Link>
        {/* <Link to='/ethe_design/vision' className='nav-option' onClick={()=>{setHeight(58.67); setBack(blackish)}}><h2>Vision</h2></Link> */}
      </div>
    
    </div>
  )
}

export const Headerz = ()=>{
  
  const blackish = 'rgb(26,26,26)'
  const whitish = 'rgb(244,244,244)'

  const [headerBackground, setBack] = useState((window.location.pathname === '/ethe_design' && window.pageYOffset < 5) ? 'hsla(0,0,96, 1)' : blackish)
  const [headerHeight, setHeight] = useState(58.67)
  const [stateDisplay, setStateDisplay] = useState('none')
  const [stateJustify, setStateJustify] = useState('center')
  const [statePadding, setStatePadding] = useState(0)
  const [offset, setOffset] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  console.log(screenWidth, 'screenWidth');
  
  
  useEffect(()=>{
    window.addEventListener('resize', (e)=>{
      setScreenWidth(window.innerWidth);
    })
    
    window.addEventListener('scroll', (e)=>{
      setOffset(window.pageYOffset);
      console.log(offset, 'offset')
    })
    document.getElementById('header2').addEventListener('wheel', (e)=>{
      if(headerHeight === '100vh'){ e.preventDefault() }
    })
  })
  
  return (
    <div id='header2' style={{height: headerHeight, justifyContent: stateJustify, paddingTop:statePadding, backgroundColor: (headerHeight < 60 && window.location.pathname === '/ethe_design') ? whitish : blackish }}>
      <div id='header-items2' >
        <Link to='/ethe_design'><img src={ethey} id='logo2' style={{filter: (headerHeight === '100vh' || window.location.pathname !== '/ethe_design') ? 'invert(1)' : 'invert(0)'}} /></Link>
        
        <img src={menuButton} style={{display:'flex'}}  id='menu2' onClick={()=>{
          if(headerHeight === 58.67){
            setStateDisplay('flex')
            setStateJustify('flex-start')
            setStatePadding(11)
            setHeight('100vh');
         }
         else{
            setHeight(58.67)
            setStateDisplay('none')
            setTimeout(()=>{setStateJustify('center'); setStatePadding(0)}, 500)
         }
        }}/>

        {/* <div id='nav-links' style={ (screenWidth < 1024) ? {display: 'none'}:(offset >=5 || headerHeight === '100vh' || window.location.pathname !== '/ethe_design') ? {filter:'invert(1)', display: 'flex'} : {filter:'invert(0)', display: 'flex'} }>
          <Link to='/ethe_design/values' className='nav-link'><h6 style={{fontSize:16, fontWeight:600, color:'black'}}>values</h6></Link>
          <Link to='/ethe_design/lyn' className='nav-link'><h6 style={{fontSize:16, fontWeight:600, color:'black'}}>lyn</h6></Link>  
          <Link to='/ethe_design/vision' className='nav-link'><h6 style={{fontSize:16, fontWeight:600, color:'black'}}>vision</h6></Link>
        </div> */}
      
      
      </div>
      
      <div id='nav-options' style={{display:stateDisplay}}>
        <Link to='/ethe_design/values' className='nav-option'  onClick={()=>{setHeight(58.67); setBack(blackish)}}><h2>our values</h2></Link>
        <hr id='divider' style={{borderWidth:1, borderColor:'#A3A3A3', width:'100%'}}/>
        <Link to='/ethe_design/lyn' className='nav-option' onClick={()=>{setHeight(58.67); setBack(blackish)}}><h2>our designer</h2></Link>
        {/* <Link to='/ethe_design/vision' className='nav-option' onClick={()=>{setHeight(58.67); setBack(blackish)}}><h2>Vision</h2></Link> */}
      </div>
    
    </div>
  )
}