import React,{useState} from 'react'
import Mainfile from './component1/main_file.js' 
import { Route, Switch } from "react-router";
import Detail from './component1/detail.js';
import  Signin from './component1/login_page';
import  Product_indi_info  from './component1/product_info';
import Final_Purchase from './component1/finalpart'

const App=()=>{
    return(
        <>
         
        <Switch>

            <Route  path="/signin" component={Signin}/>
            <Route  path="/detail" component={Detail}/>
            <Route  path="/product" component={Product_indi_info}/>
            <Route  path="/Purchase-section" component={Final_Purchase}/>
            <Route  path="/" component={Mainfile}/>

        </Switch>
        
        </>
    )
}
export default App;