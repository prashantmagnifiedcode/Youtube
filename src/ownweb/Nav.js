import React,{useEffect,useState} from "react";
import { Route, Switch } from "react-router";
import Slideshow from "../component/slideshow";
import Load from '../component/loader'
import Sign from './Sing'

import Content from './content'
import  Detail from './detail'
const Routers = () => {
  const [loadscreen, setloadscreen] = useState(true)
    useEffect(async() => {
      try{
            const value= await fetch("http://soundcloud.com/oembed?url=http%3A//soundcloud.com/forss/flickermood&format=json")
            
            if(value.status===200){

              setloadscreen(false)
              
            }

      }catch(e){
  setloadscreen(true)}
      
    },[])
      console.log(loadscreen)
    if(loadscreen){
      
      return (
        <>
          <Switch>
          <Route path="/" component={Load} />
            
          </Switch>
        </>
      );
    }else{
      return (
        <>
          <Switch>
        
                    <Route path="/sign" component={Sign} />
                    <Route path="/Content" component={Content} />
                    <Route path="/Detail" component={Detail} />
                    <Route path="/" component={Slideshow} />
                    
                    
          
          </Switch>
        </>
      );
    }
  
};
const Nav = () => {
  return (
    <>
      <Routers />
      
    </>
  );
};
export default Nav;
