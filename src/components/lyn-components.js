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
      <div id='profile-image'></div>
      <div id='nameTitleLocation'>
        <h2 id='name'>Lyn Jackson</h2>
        <h2 id='title'>UI Developer</h2>
        <h3 id='location'>Brooklyn, NY</h3>

        <div id='contact-div'>
          <a className='contact-link' href="mailto:lynjacksonoconnor@gmail.com" id='email'>lynjacksonoconnor@gmail.com</a>
          <a className='contact-link' href="tel:+2672438796" id='phone'>267.243.8796</a>
          <a className='contact-link' href='https://www.linkedin.com/in/lyndon-jackson-541a5b18/' target='_blank' id='linkedin'>LinkedIn</a>
          <a className='contact-link' href='https://drive.google.com/file/d/1z4Kqu8joAprX7M2sZHaEh2q7U38I7pPA/view?usp=sharing' target='_blank' id='linkedin'>Resume</a>
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
          <a className='portfolio-image-link' href={props.imageLink} target='_blank'><img className='portfolio-image' src={props.image}></img></a>
          <div className='portfolio-info-div'>
          <a href={props.imageLink} target='_blank'><h3 className='info-title'>{props.projectName}</h3></a>
            <h5 className='info-tech'>{props.projectTech}</h5>
            <a href={props.xdLink} target='_blank'><div className='design-doc-div'><img className='xd-icon' src={XDIcon}></img><h5 className='design-doc-text'>Design Documents</h5></div></a>
          </div>
        </div>
    )
  }
  
  return(
    <LynTab title={'Portfolio'}>
      <Project image={Bill} projectName={'Bill Android Pay App'} projectTech={'React Native, REST API , Redux, Firebase'}/>
      <Project image={Ethe} projectName={'Ethe Design Firm Site'} projectTech={'React Native, REST API , Redux, Firebase'} imageLink={'/'} xdLink={'https://xd.adobe.com/view/5c54b440-3964-4159-7353-f2eb278083b7-2a65/screen/26a9b51d-f537-4eb0-be5c-214f3870daf8/Vision-15-1'}/>
      <Project image={PTStudio} projectName={'Perfect Touch Studio Site'} projectTech={'React Native, REST API , Redux, Firebase'} imageLink={'https://studio.ljoconnor5.now.sh/'}/>
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
      <ExperienceItem place='Bill, Inc.' title='Mobile Developer' time="Jan '19 - May '19" description='Working on the design & development teams creating an iOS/Android application that enables restaurant diners to place orders and pay with mobile devices. Creating Bill’s UI with React Native, and managing its REST API and Firebase database. Wireframed Bill with Adobe XD. Continuously learning about mobile UI/UX design and development.'/>
      <ExperienceItem place='Freelance' title='UI Developer' time='12/18 - 7/19' description='Working directly and closely with clients to design and create websites. I make use of an iterative human centered design process to understand each client’s vision and business, and craft it into a product. '/>
      <ExperienceItem place='Jones Day' title='Corporate Counsel' time="10/15 - 6/18" description='Led large teams reviewing company agreements to identify potential issues and create legal snapshots for corporate transactions. Teams usually changed from deal to deal, so quickly learning to work with people was important. Usually served as a principal point of communication between my team and our clients. My experience taught me the meaning of professionalism, to understand and take ownership of the larger mission and to be a good teammate.'/>
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
      <p>I am a User Interface Developer. I love designing experiences and then making them real. I believe the quality of our digital experiences is very important, and in several ways. It’s important that users find experiences intuitive, not simply because it makes them more enjoyable, but because it often makes the difference in the user actually getting what they need. It’s important from a business standpoint because customers and potential customers remember even slightly unpleasant experiences, and that alone can cause them to write a company off. So, I  like to create and improve digital experiences so that they’re in a place that users will really appreciate. </p>
      <p>I mostly create web experiences and mobile apps. I design responsive wireframes and prototypes in Adobe XD. I then adapt them in JavaScript using the React framework and other front-end technologies to create fast, intuitive stuff.</p>
      <p>I’m a student of the game when it comes to both design and development. I’m adherent to design principles and conventions, but have my opinions, if say, a convention hurts the experience. With development, my focus shifts to the developer experience. I write clean and efficient code, and am always keen to learn the latest language capabilities and technologies. I love getting better at what I do.</p>
      <p>I want to be part of a team of people who create products and experiences, and are passionate about doing so. For a few years, I worked for years as a corporate lawyer in a fast paced, often high pressure environment. I know what it is to be a professional, and a good teammate. I prioritize streamlining my workflow for myself and teammates as much as I can.</p>
      <p>Some of my other interests are summer, basketball, cooking, crashing open houses and new experiences.</p>
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
      <div id='portfolio-tab' className='tab' onClick={()=>{toggleTab()}}> <h2 className='tab-title'>{props.title}</h2> <img className='little-arrow' src={dropArrow} style={{transform: tabStyle.transform}}></img> </div>
      {props.children}
    </div>
  )
}

























export const Profile_Mobile = ()=>{
  return (
    <div id='profile_lyn'>
      <div id='lyn-image_lyn'></div>
      <div id='name-title-icons-div_lyn'>

        <div id='name-title-div_lyn'>
          <p id='lynjackson_lyn'>Lyn Jackson</p>
          <p id='uidev_lyn'>UI Developer</p>
          <p id='bk_lyn'>Brooklyn, NY</p>
        </div>

        <div id='contact-div_lyn'>
          <ContactLink text={'Resume'} linktype={'resume'} url='https://drive.google.com/file/d/1bBXDKf7KqYOqst2fDeztQuVxANpa61Tn/view?usp=sharing'/>
          <ContactLink text={'LinkedIn'} linktype={'linkedin'} url='https://www.linkedin.com/in/lyndon-jackson-541a5b18/'/>
          <ContactLink text={'Email'} linktype={'email'} url='mailto:ljoconnor5@gmail.com'/>
        </div>

      </div>
    </div>
  )
}



export const Profile_Desktop = ()=>{
  return (
    <div id='profile_lyn'>
      <div id='lyn-image_lyn'></div>
      <div id='name-title-icons-div_lyn'>

        <div id='name-title-div_lyn'>
          <p id='lynjackson_lyn'>Lyn Jackson</p>
          <p id='uidev_lyn'>UI Developer</p>
        </div>

        <div id='contact-div_lyn'>
          <ContactLink text={'Resume'} linktype={'resume'} url='https://drive.google.com/file/d/1bBXDKf7KqYOqst2fDeztQuVxANpa61Tn/view?usp=sharing'/>
          <ContactLink text={'LinkedIn'} linktype={'linkedin'} url='https://www.linkedin.com/in/lyndon-jackson-541a5b18/'/>
          <ContactLink text={'Email'} linktype={'email'} url='mailto:ljoconnor5@gmail.com'/>
        </div>

      </div>
    </div>
  )
}

// export const Profile = ()=>{
//   return(
//     <div id='lyn-profile'>
//       <div id='lyn-image-div'><img id='lyn-image' src={LynImage}/></div>
//       <div id='lyn-info-div'>
//         <div id='lyn-text-div'>
//           <h1>Lyn Jackson</h1>
//           <h2>UI Developer</h2>
//           <h3>Brooklyn, NY</h3>
//         </div>
//       </div>
//     </div>
//   )
// }

// export const Stack = ()=>{
 
//   const StackItem = (props)=>{
//     return(
//     <div style={{display:'flex', alignItems:'center'}}><img style={{width:31, height:31, marginRight: 16.2}} src={props.icon}/><p style={{fontFamily:'nunito sans', fontSize:13, fontWeight:700}}>{props.text}</p></div>
//     )
//   }
  
// return(
//     <div id='stack_lyn'>
//       <div className='stack-column_lyn' id='stack-left_lyn'>
//         <StackItem icon={ReactIcon} text={'React'}/>
//         <StackItem icon={WebpackIcon} text={'Webpack'}/>
//         <StackItem icon={JSIcon} text={'JavaScript'}/>
//         <StackItem icon={NodeIcon} text={'NodeJS'}/>
//         <StackItem icon={XDIcon} text={'XD'}/>
//         <StackItem icon={SketchIcon} text={'Sketch'}/>
//       </div>
//       <div className='stack-column_lyn' id='stack-right_lyn'>
//         <StackItem icon={NextIcon} text={'Next.js'}/>
//         <StackItem icon={ReduxIcon} text={'Redux'}/>
//         <StackItem icon={CSSIcon} text={'CSS'}/>
//         <StackItem icon={GraphQLIcon} text={'GraphQL'}/>
//         <StackItem icon={SassIcon} text={'Sass'}/>
//         <StackItem icon={TypescriptIcon} text={'Typescript'}/>
//       </div>
//     </div>
//   )
// }



export const Portfolio1 = (props)=>{
  
  const PortfolioItem = (props)=>{
    return(
      <div className='portfolio-item'>
        <img src={props.image}/>
        <div className='portfolio-item-text'>
          <h1>{props.title}</h1>
          <h2>{props.tech}</h2>
          <a>Design Docs</a>
        </div>
      </div>
    )
  }
  
  return(
    <div className='section-lyn' id='portfolio_lyn'>
      <h1 className='section-title_lyn' id='portfolio-title_lyn'>Portfolio</h1>  
      <PortfolioItem image={PTStudio} title='Perfect Touch Studio Site' tech='React, Webpack, Sass'/>
      <PortfolioItem image={Ethe} title='Ethe Design Site' tech='React, Redux, Webpack, Sass'/>
      <PortfolioItem image={Bill} title='Bill Restaurant Mobile App' tech='React Native, Redux, Firebase, Sass'/>
    </div>
  )
}






