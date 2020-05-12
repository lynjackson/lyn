import React from 'react';
import {HeaderMobile, HeaderDesktop} from '../components/header';
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, menuHeader, scrollHeader, values} from '../actions/index.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import '../styles/people.css'
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";

export const People = (props) => {
  

  
    return(
      <div id='page_people' style={{height:'100vh'}}>
        <div id='content_people'>
          <Link to='/lyn' id='person1-icon_people'>
            <div id='person1-image_people'></div>
            <p id='name_people'>Lyn Jackson</p>
            <p id='role_people'>UI Developer</p>
            </Link>
          <p id='page_people'>Page 1/1</p>
        </div>

      </div>
    )

  // componentDidMount(){
  //   props.scrollHeader();
  //   window.addEventListener('resize', ()=>{
  //     this.setState({change:this.state.change + 1})
  //   })
  // }
}

function mapStateToProps(state){
  return{
    books: state.books,
    view: state.view,
    values: state.values,
    header: state.header
  }
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ selector: selectBook, overlay: overlay, valueNextPage: valueNextPage, valuePrevPage: valuePrevPage, defaultView: defaultView, defaultHeader: defaultHeader, invertHeader: invertHeader, menuHeader: menuHeader, scrollHeader: scrollHeader,  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(People)
