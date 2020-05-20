import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import Home2 from './pages/home'
// import Values from './pages/values';
// import Values3 from './pages/values3';
// import {Values} from './pages/values2';
// import Bill from './pages/bill';
// import {BillApp_Mobile, BillApp_Desktop} from './pages/bill_app';
// import About from './pages/about'
// import Vision from './pages/vision'
// import Lyn2 from './pages/lyn'
// import People from './pages/people'
import './styles/css/app.css'
import './styles/css/pages.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {BrowserRouter, Route} from 'react-router-dom'
import{Header} from './components/header.js'
import{Contact} from './components/contact.js'

const Vision = lazy(() => import('./pages/vision'));
const Values = lazy(() => import('./pages/values2'));
const Lyn2 = lazy(() => import('./pages/lyn'));
const Bill = lazy(() => import('./pages/bill'));
const BillApp_Mobile = lazy(() => import('./pages/bill_app'));
// const Home2 = lazy(() => import('./pages/home'));
const People = lazy(() => import('./pages/people'));

ReactDOM.render(
	<Provider store={createStore(reducers)}>
	  <BrowserRouter>
	    
			<div id='routes'>
			{/* <Route path='/bill_page/' component={Header} /> */}
			<Route exact='true' path='/ethe_design/' component={Home2}/>
			<Suspense fallback={<div style={{height:1, borderColor: 'red', borderWidth:2}}><p style={{color:'white', fontSize:200}}>'loading'</p></div>}>
				<Route exact='true' path='/bill_page' component={BillApp_Mobile}/>
				<Route exact='true' path='/ethe_design/values' component={Values}/>
				{/* <Route exact='true' path='/vision' component={Vision} /> */}
				<Route exact='true' path='/bill' component={Bill}/>
				<Route exact='true' path='/lyn' component={Lyn2}/>
				{/* <Route exact='true' path='/people' component={People}/> */}
			<Route path='/' component={Contact} />
			</Suspense>
			</div>
		
	  </BrowserRouter>
	</Provider>,
	document.getElementById('root')
)


