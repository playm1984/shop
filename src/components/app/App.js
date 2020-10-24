import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom';

import LogOpen from '../log-open'
import MainPage from '../main-page'
import Footer from '../footer'
import Header from '../header'
import ShoppingBasket from '../shopping-basket'
import Outerwear from '../outerwear'
import Jacket from '../jacket'



export default class App extends Component {
  render() {
    return (
      <div>
        {/* <LogOpen/> */}
        <Header/>
        
        <Switch>
          <Route path='/' component={MainPage} exact/>
          <Route path='/basket' component={ShoppingBasket} exact/>
          <Route path='/outerwear' component={Outerwear} exact/>
          <Route path='/jacket' component={Jacket} exact/>
        </Switch>
        {/* <MainPage/> */}
        {/* <ShoppingBasket/> */}
        {/* <Footer/> */}
      </div>
    )
  }
}

