import React from 'react'
import '../styles/bill/bill.css'
// import '../styles/lyn/portfolio.css'

const BilliOS =()=>{
  return(
    <div id=''>
      <iframe scrolling='no' style={{width:500, position: 'relative', height: 667, border:'none'}} src="https://appetize.io/embed/tq08t4qj50qjtmgg716hn6jut4?autoplay=true&amp;debug=true&amp;device=iphone6s&amp;deviceColor=black&amp;embed=true&amp;orientation=portrait&amp;scale=75.3&amp;screenOnly=false&amp;xDocMsg=true&amp;xdocMsg=true&amp;params=%7B%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexpo.io%2F%40hop26%2Fbillrestaurant-iosapp%2B!UuTA77p!%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D" class="_1il6y7w"></iframe>
    </div>
  )
}

const BillAndroid_Border =()=>{
  return(
    <div id='phone-div_bill'>
    <iframe scrolling='no' id='phone-box_bill' style={{}} src="https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?autoplay=true&amp;debug=true&amp;device=nexus5&amp;deviceColor=black&amp;embed=true&amp;launchUrl=exp%3A%2F%2Fexpo.io%2F%40hop26%2Fcranky-celery%2BIoBs2rZy1&amp;orientation=portrait&amp;screenOnly=false&amp;xDocMsg=true&amp;xdocMsg=true&amp;params=%7B%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexpo.io%2F%40hop26%2Fcranky-celery%2BIoBs2rZy1%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D" class="_1il6y7w"></iframe>
    </div>


  )
}
const BillAndroid_NoBorder =()=>{
  return(
    <div id='phone-div_bill'>
    <iframe scrolling='no' id='phone-box_bill' style={{}} src="https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?autoplay=true&amp;debug=true&amp;device=nexus5&amp;deviceColor=black&amp;embed=true&amp;launchUrl=exp%3A%2F%2Fexpo.io%2F%40hop26%2Fcranky-celery%2BIoBs2rZy1&amp;orientation=portrait&amp;screenOnly=true&amp;xDocMsg=true&amp;xdocMsg=true&amp;params=%7B%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexpo.io%2F%40hop26%2Fcranky-celery%2BIoBs2rZy1%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D" class="_1il6y7w"></iframe>

    </div>
  )
}


{/* <iframe src="https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?autoplay=false&amp;debug=true&amp;device=nexus5&amp;deviceColor=black&amp;embed=true&amp;launchUrl=exp%3A%2F%2Fexpo.io%2F%40hop26%2Fcranky-celery%2BIoBs2rZy1&amp;orientation=portrait&amp;screenOnly=false&amp;xDocMsg=true&amp;xdocMsg=true&amp;params=%7B%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexpo.io%2F%40hop26%2Fcranky-celery%2BIoBs2rZy1%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D" class="_1il6y7w"></iframe> */}




class BillApp_Mobile extends React.Component{

  constructor(){
    super();
    this.state={change:0}
  }
  render(){
    if(window.innerWidth < 475){
      return (
        <div id='page_bill' style={{}}>
          {// <div id='header_bill'><div id='header-items_bill'><div id='bill-logo_bill'></div></div></div>
          }
          <BillAndroid_NoBorder/>
        </div>
      )
    }
    else{
      return(
        <div id='page_bill' style={{}}>
          <div id='header_bill'><div id='header-items_bill'><div id='bill-logo_bill'></div></div></div>
          <div id='content-div_bill'>
            <div id='question-qr_bill'>
              <p className='open-option-title_bill' style={{fontSize: 31}}>Open in Expo</p>
              <div className='qr_portfolio_bill' id='bill-qr_portfolio_bill'></div>
              <p className='open-option-desc_bill' style={{fontSize: 16, width:185}}>Android devices with Expo installed.</p>
              <div className='icon-div_bill'><div id='android-icon_bill' className='icon_bill'></div><p className='plus_bill'>+</p><div id='expo-icon_bill' className='icon_bill'></div></div>
            </div>
            <BillAndroid_Border/>
          </div>
        </div>
      )
    }

  }
  componentDidMount(){
    window.addEventListener('resize', ()=>{
      this.setState({change: this.state.change + 1})
    })
  }


}

// export const BillApp_Desktop = (props) => {
//   return (
//     <div id='page_bill' style={{}}>
//       <div id='header_bill'><div id='header-items_bill'><div id='bill-logo_bill'></div></div></div>
//       <div id='content-div_bill'>
//         <div id='question-qr_bill'>
//           <p className='open-option-title_bill' style={{fontSize: 31}}>Open in Expo</p>
//           <div className='qr_portfolio' id='bill-qr_portfolio'></div>
//           <p className='open-option-desc_bill' style={{fontSize: 16, width:185}}>Android devices with Expo installed.</p>
//           <div className='icon-div_bill'><div id='android-icon_bill' className='icon_bill'></div><p className='plus_bill'>+</p><div id='expo-icon_bill' className='icon_bill'></div></div>


//         </div>
//         <BillAndroid/>
//       </div>
//     </div>
//   )
// }

export default BillApp_Mobile
