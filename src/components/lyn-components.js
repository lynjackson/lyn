import React, {useState} from 'react';
import {ContactLink} from './lyn/contact-link';
import '../styles/css/lyn.css';
import LynImage from '../assets/images/lyn2.jpg';
import XDIcon from '../assets/icons/xd1.png';

import PTStudio from '../assets/images/ptstudio.jpeg';
import Ethe from '../assets/images/ethe.png';
import Bill from '../assets/images/phone2.png';

import dropArrow from '../assets/icons/dropArrow.png';


export const Profile = ()=>{
  
  const [height, setHeight] = useState('auto')
  
  return(
    <div id='profile' className='lyn-section' >
      <div id='image'></div>
      <div id='nameTitleLocation'>
        <h2 id='name'>Lyn O'Connor</h2>
        <h2 id='title' className='grey-title'>UI Developer</h2>
        <h3 id='location'>Brooklyn, NY</h3>

        <div id='contact-div'>
          <a className='contact-link' href="mailto:lynjacksonoconnor@gmail.com" id='email'>lynjacksonoconnor@gmail.com</a>
          <a className='contact-link' href="tel:+2672438796" id='phone'>267.243.8796</a>
          <a className='contact-link' href='https://www.linkedin.com/in/lyndon-jackson-541a5b18/' target='_blank' id='linkedin'>LinkedIn</a>
          {/* <a className='contact-link' href='https://drive.google.com/file/d/1z4Kqu8joAprX7M2sZHaEh2q7U38I7pPA/view?usp=sharing' target='_blank' id='linkedin'>Resume</a> */}
        </div>
      
      </div>
    </div>
  )
}

export const Portfolio = ()=>{
  
  const [stateHeight, setStateHeight] = useState('auto')
  const [arrowPos, setArrowPos] = useState('rotate(0deg)')
  const [tabStyle, setTabStyle] = useState({height: 'auto', transform: 'rotate(0deg)', marginBottom: 49})

  const toggleTab = () => {
    (tabStyle.height === 'auto') ? setTabStyle({height: 69, transform: 'rotate(-90deg)', marginBottom: 0}):setTabStyle({height: 'auto', transform: 'rotate(0deg)', marginBottom: 49})
  }
  

  const Project = (props)=>{
    return(
      <div className='portfolio-project'>
          {/* <div className='portfolio-image' id='bill-image'></div> */}
          <a className='project-image-link' href={props.imageLink} target='_blank'><img className='portfolio-image' src={props.image}></img></a>
          <div className='project-info-div'>
          <a href={props.imageLink} target='_blank'><h3 className='title'>{props.projectName}</h3></a>
            <h5 className='tech'>{props.projectTech}</h5>
            <a href={props.xdLink} target='_blank'><div className='design-doc-div'><img className='xd-icon' src={XDIcon}></img><h5 className='design-doc-text'>Design Documents</h5></div></a>
          </div>
        </div>
    )
  }
  
  return(
    <LynTab title={'Portfolio'}>
      <Project image={Bill} projectName={'Bill Android Pay App'} projectTech={'React, Webpack, Redux, Sass'} imageLink={'https://lynjackson.github.io/bill_page'} xdLink={'https://xd.adobe.com/view/5ec009d3-2a06-4639-40a6-b639838c3164-28f1/'}/>
      <Project image={Ethe} projectName={'Ethe Design Firm Site'} projectTech={'React Native, REST API, Redux, Firebase'} imageLink={'/ethe_design'} xdLink={'https://xd.adobe.com/view/5c54b440-3964-4159-7353-f2eb278083b7-2a65/screen/26a9b51d-f537-4eb0-be5c-214f3870daf8/Vision-15-1'}/>
      <Project image={PTStudio} projectName={'Perfect Touch Studio Site'} projectTech={'React, Next.js, Redux, Sass'} imageLink={'https://studio.ljoconnor5.now.sh/'} />
    </LynTab>
  )
}

export const Experience = (props) =>{
  
  const ExperienceItem = (props) => {
    return(
      <div className='experience-item'>
        <div className='item-stats'>
          <h3 className='title'>{props.title}</h3>
          <h3 className='place'>{props.place}</h3>
          <h5 className='time'>{props.time}</h5>
        </div>
        <p className='description'>{props.description}</p>
      </div>
    )
  }
  
  return(
    <LynTab title={'Experience'}>
      <ExperienceItem place='Bill, Inc.' title='UI Developer' time="12/19 - 05/19" description='I lead a team of three creating an iOS/Android application that allows restaurant diners to pay with mobile devices. We used a human centered design process to devise the app’s flow. I created wireframes using UI design principles and Adobe XD, then translated them into React Native syntax down to the pixel. I connected and manage the app’s REST API and Firebase database. I’m continuously learning about mobile UI design and development, and how it differs from browser focused development.'/>
      <ExperienceItem place='Freelance' title='Frontend Developer' time='12/18 - 07/19' description='I designed and built websites for several clients. For each project, I designed the interface with Adobe XD, and built the views with React. Each project was built responsively using 375px and 2560px as general outer limits. I used a variety of other technologies for each project, depending on need. These projects helped me develop a nuanced understanding of React’s lifecycle and data flow. I learned to skillfully write functional JavaScript and efficient and responsive CSS using Sass. '/>
      <ExperienceItem place='Jones Day' title='Counsel' time="10/15 - 06/18" description='I led large teams of lawyers in identifying potential legal issues and creating company snapshots for corporate transactions. Teams usually changed from deal to deal, so quickly learning to work with people was important. I usually served as a principal point of communication between my team and our clients. My experience taught me the meaning of professionalism, and the importance of owning the larger mission and being a good teammate.'/>
    </LynTab>
    
  )
}

export const Education = (props) =>{
  
  const EducationItem = (props) =>{
    return(
      <div className='education-item'>
        <h3 className='school'>{props.school}</h3>
        <h3 className='degree'>{props.degree}</h3>
      </div>
    )
  }

  return(
    <LynTab title={'Education'}>
      <EducationItem school='University of Pennsylvania' degree='Juris Doctor, 2015'/>
      <EducationItem school='Johns Hopkins University' degree='B.A., 2012'/>
    </LynTab>
  )
}

export const More =(props) =>{
  return(
    <LynTab title={'More'}>
      <p>I believe in the power of the interface to influence the hearts and minds of users. I strive to create fast, useful products that give users a sense of ease, and enjoy working with individuals who think similarly. I am always trying to grow my body of knowledge, and have committed to thinking my way around problems. </p>
      <p>I’m a student of both development and design; adherent to UI principles and best practices of development. Developers are users too, perhaps not of the product, but of the code that comprises it. It’s important to me that code be clean, efficient and readable.</p>
      <p>I enjoy working as part of team, collectively trying to solve a problem we all care about. I understand the importance of communication and flexibility in teamwork, and prioritize and enjoy finding ways to streamline my workflow. </p>
      <p>I try to learn from my mistakes, and live with a balance of humility, diligence, empathy and patience. </p>
    </LynTab>
  )
}

const LynTab = (props) =>{
  
  const [stateHeight, setStateHeight] = useState('auto')
  const [arrowPos, setArrowPos] = useState('rotate(0deg)')
  const [tabStyle, setTabStyle] = useState({height: 'auto', transform: 'rotate(0deg)', marginBottom: 49})

  const toggleTab = () => {
    (tabStyle.height === 'auto') ? setTabStyle({height: 69, transform: 'rotate(-90deg)', marginBottom: 0}):setTabStyle({height: 'auto', transform: 'rotate(0deg)', marginBottom: 49})
  }
  
  return(
    <div className='lyn-section' style={{height: tabStyle.height, marginBottom: tabStyle.marginBottom}}>
      <div id='portfolio-tab' className='tab' onClick={()=>{toggleTab()}}> <h2 className='grey-title'>{props.title}</h2> <img className='little-arrow' src={dropArrow} style={{transform: tabStyle.transform}}></img> </div>
      {props.children}
    </div>
  )
}
