import React, {useState, useEffect, useCallback} from 'react';
// import '../../styles/home/aboveFold.css';
import '../styles/css/home.css';
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";

import Experiences from '../assets/icons/campaign.png';
import Data from '../assets/icons/report.png';
import Performance from '../assets/icons/speed.png';

import art from '../assets/images/cover.jpeg'
import bill_back from '../assets/images/bill-background.jpeg'
import studio from '../assets/images/studio.png'
import bill_logo from '../assets/icons/bill.png'


export const AboveFold = (props)=>{
  
  const topSpace = window.pageYOffset;
  
  const [arrowOpacity, setArrowOpacity] = useState((topSpace < 5) ? 1 : 0);
  const [titleOpacity, setTitleOpacity] = useState((topSpace < 5 ) ? 1 : .1);
  const [state, setState] = useState(1);
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if (window.pageYOffset < 5){
        setArrowOpacity(1);
        setTitleOpacity(1);
      }
      else{
        setArrowOpacity(0);
        setTitleOpacity(.1);
      }
    })
    window.addEventListener('resize',()=>{
      setState(state + 1)
    })
  })

  return(
    <div id='above-fold' style={{display: 'flex'}}>
        <h1 id='above-title' style={{opacity: titleOpacity}}>Digital products & solutions for modern companies</h1>
        {/* <div id='arrow-div' onClick={()=>{window.scrollTo({top:document.getElementById('above-fold').offsetHeight -100, behavior: 'smooth'})}}><img src={arrow} id='down-arrow' style={{width:31, height:18, opacity:arrowOpacity}} /></div> */}
        {/* <div id='above-background'></div> */}
    </div>
  )
}


export const Services = ()=>{
  const [servicesOpacity, setOpacity] = useState(.18)
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      (window.pageYOffset > 5 && window.pageYOffset < 500) ? setOpacity(1) : setOpacity(.18)
    })
  })

  const Service = (props)=>{
    return(
      <div className='service'>
        <img src={props.img}/>
        <div className='service-text'>
            <h3 className='service-header'>{props.title}</h3>
            <p className='service-para'>{props.description}</p>
        </div>
    </div>
    )
  }

  return(
    <div id='services' style={{opacity: servicesOpacity}}>
      <Service img={Experiences} title={'Crafting digital experiences'} description={'We aim to associate your brand with joy in the minds of users.'}/>
      <Service img={Data} title={'Finding knowledge in data'} description={'Data adds science to your art, taking you from guesswork to informed decisions.'}/>
      <Service img={Performance} title={'Improving through strategy'} description={'We analyze performance to enhance the experience further.'}/>
    </div>
  )
}


export const Projects = ()=>{
  
  const [stateOpacity, setOpacity] = useState(.18)
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      (window.pageYOffset > document.getElementById('projects').offsetTop - 423) ? setOpacity(1) : setOpacity(.18)
    })
  })
    const Project = (props) =>{
      return(
        
        <div className='project' style={{backgroundImage: `url(${props.background})`, color: props.textColor }}>
          <a href={props.link} target='_blank'>
            <div className='overlay' style={{background:`linear-gradient(359deg, ${props.color1}, ${props.color2})`}}>
              <img className='logo' src={props.logo}></img>
              <h4 className='tagline' style={{color: props.textColor}}>{props.tagline}</h4>
            </div>
          </a>
        </div>
        
      )
    }
    
    return(
      <div id='projects' style={{opacity:stateOpacity}}>
        <h2 id='projects-title'>Projects</h2>
        <div id='project-container'>

          <div className='project' style={{backgroundImage: `url(${bill_back})`, color: '#FFFFFFC4' }}>
            <Link to='/ethe_design/bill_app'>
              <div className='overlay' style={{background:`linear-gradient(359deg, ${'#000000B2'}, ${'#00000014'})`}}>
                <img className='logo' src={bill_logo}></img>
                <h4 className='tagline' style={{color: '#FFFFFFC4'}}>{'A better way to order'}</h4>
              </div>
            </Link>
          </div>





            {/* <Project background={bill_back} logo={bill_logo} tagline={'A better way to order'} color1={'#000000B2'} color2={'#00000014'} textColor={'#FFFFFFC4'} link={'/ethe_design/bill_app'}>
              <Link to='/ethe_design/bill_app' className='nav-link'>
                <div className='overlay' style={{background:`linear-gradient(359deg, ${props.color1}, ${props.color2})`}}>
                  <img className='logo' src={props.logo}></img>
                  <h4 className='tagline' style={{color: props.textColor}}>{props.tagline}</h4>
                </div>
              </Link>  
            </Project> */}
            
            <Project background={art} logo={studio} tagline={'The creative space'} color1={'#FFFFFFC4'} color2={'#FFFFFF14'} textColor={'#000000B2'} link={'https://studio.ljoconnor5.now.sh/'}>
            </Project>
        </div>
      </div>
    )
  }

