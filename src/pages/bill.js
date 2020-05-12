import React from 'react'
import '../styles/bill/bill.css'

const BilliOS =()=>{
  return(
    <div id=''>
      <iframe scrolling='no' style={{width:500, position: 'relative', height: 667, border:'none'}} src="https://appetize.io/embed/tq08t4qj50qjtmgg716hn6jut4?autoplay=true&amp;debug=true&amp;device=iphone6s&amp;deviceColor=black&amp;embed=true&amp;orientation=portrait&amp;scale=75.3&amp;screenOnly=false&amp;xDocMsg=true&amp;xdocMsg=true&amp;params=%7B%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexpo.io%2F%40hop26%2Fbillrestaurant-iosapp%2B!UuTA77p!%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D" class="_1il6y7w"></iframe>
    </div>
  )
}

const BillAndroid =()=>{
  return(
    <div>
    <iframe scrolling='no' id='phone-box_bill' style={{display:'none'}} src="https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?autoplay=false&amp;debug=true&amp;device=nexus5&amp;deviceColor=black&amp;embed=true&amp;launchUrl=exp%3A%2F%2Fexpo.io%2F%40hop26%2Fbillrestaurant-iosapp%2Bp4OcOJ3pn&amp;orientation=portrait&amp;screenOnly=false&amp;xDocMsg=true&amp;xdocMsg=true&amp;params=%7B%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexpo.io%2F%40hop26%2Fbillrestaurant-iosapp%2Bp4OcOJ3pn%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D" class="_1il6y7w"></iframe>
    </div>
  )
}

const Bill = (props) => {
  if(window.innerWidth > 475){
    return window.location.href = '/bill_app'
  }

  return (
    <div id='page_bill' style={{}}>
      <div id='header_bill'><div id='header-items_bill'><div id='bill-logo_bill'></div></div></div>
      <p id='question_bill'>How do you want to view the Bill App?</p>
      <div id='open-options-div_bill'>

        <a href='exp://expo.io/@hop26/74c4cf+pPiw812Bd' className='open-option_bill' >
          <p className='open-option-title_bill'>Open in Expo</p>
          <div className='icon-div_bill'><div id='android-icon_bill' className='icon_bill'></div><p className='plus_bill'>+</p><div id='expo-icon_bill' className='icon_bill'></div></div>
          <p className='open-option-desc_bill'>Android devices with Expo installed.</p>
        </a>

        <a href='/bill_app' className='open-option_bill'>
          <p className='open-option-title_bill'>Open in Browser</p>
          <div className='icon-div_bill'><div id='no-expo-icon_bill' className='icon_bill'></div><p className='plus_bill'>/</p><div id='apple-icon_bill' className='icon_bill'></div></div>
          <p className='open-option-desc_bill'>Apple devices & Android devices without Expo.</p>
        </a>

      </div>

    </div>
  )
}

export default Bill;
