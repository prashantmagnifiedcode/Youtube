import React, { createContext, useReducer } from 'react'
import { Route, Switch } from 'react-router'
import Home from './component/Home'
import Contact from './component/contact'
import Service from './component/service'
import Menu from './component/Menu'
import Detail from './component/detail'
import Signin from './component/signin'
import Logout from './component/logout'
import Error from './component/error'
import Home1 from './component/Home1'
import {initialstate,reducer} from './component/usereducer';

export const userContext = createContext()
const Routerapp=()=>{
  return (
    <>
    <Switch>

  <Route path="/register" component={Home}/>
  <Route path="/signin" component={Signin}/>
  <Route path="/contact" component={Contact}/>
  <Route path="/service" component={Service}/>
  <Route path="/detail" component={Detail}/>
<Route path=  "/logout" component={Logout}/>
<Route path=  "/" component={Home1}/>

  <Route><Error/></Route>
    </Switch>
    </>
  )

}
const App=()=> {

  const [state,dispatch]=useReducer(reducer ,initialstate)

  return (

    <>
    <userContext.Provider value={{state,dispatch}}>
    <Menu/>
    <Routerapp/>
    </userContext.Provider>
  
    </>
  )
}

export default App;
