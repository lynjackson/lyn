import React from 'react';

export const ContactLink = (props)=>{
  return (
    <div id='contact-link_lyn'>
      <a style={{textDecoration:'none'}} href={props.url} target="_blank">
        <div id={`${props.linktype}-image_lyn`} className='contact-image_lyn'></div>
        <p id='resume-link_lyn' className={`contact-link-text_lyn ${props.type}-link-text_lyn`}>{props.text}</p>
      </a>
    </div>
  )
}

export const StackLink = (props)=>{
  return (
    <div id='contact-link_lyn'>
      <div id={`${props.linktype}-image_lyn`} className='contact-image_lyn'></div>
      <p id='resume-link_lyn' className={`contact-link-text_lyn ${props.type}-link-text_lyn`}>{props.text}</p>
    </div>
  )
}
