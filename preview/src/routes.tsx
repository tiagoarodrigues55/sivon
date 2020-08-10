import {Route, BrowserRouter} from 'react-router-dom'
import DelegatePage from './pages/delegate/Layout/index'
import ModeratorPage from './pages/moderator/Layout/index'
import React from 'react'

const Routes = () =>{
 
  return (
    <BrowserRouter>
    <Route exact component={DelegatePage} path="/Delegate"/>
    <Route exact component={ModeratorPage} path="/Moderator"/>
    </BrowserRouter>

  )

}
export default Routes