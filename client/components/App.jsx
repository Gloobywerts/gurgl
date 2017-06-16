import React from 'react'

import Header from './Header'

import Nav from './Nav'
import ClothingContainer from '../containers/ClothingContainer'
import SingleView from './SingleView'
import Faq from './Faq'
import Footer from './Footer'
import Account from './Account'
import SignUpFormContainer from '../containers/SignUpFormContainer'
import SignInFormContainer from '../containers/SignInFormContainer'

import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => (
  <Router>
    <div className='app'>
      <Header/>
     <Route path="*" component={Nav}/>
      <Route path="/clothing" component={ClothingContainer}/>
      <Route path="/signup" component={SignUpFormContainer}/>
      <Route path="/signin" component={SignInFormContainer}/>
      <Route path="/account/:id" component={Account}/>
      <Route path="/singleview" component={SingleView}/>
      <Route path="/faq" component={Faq}/>
      <Footer/>
    </div>
  </Router>
)
export default App
