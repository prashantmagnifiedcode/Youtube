import React from 'react'

import {useSelector,useDispatch} from 'react-redux'
import {increment,decnumber} from './redox/action'
const App=()=>{

    const mystate = useSelector((state) => state.changeThenumbers)
    const dispatch = useDispatch()
    return(
        <>
    <div>
    <a title="increment" onClick={()=> dispatch(decnumber())} ><span>sub</span></a>
        <input name="quantity"  type="text" value={mystate}/>
        <a title="increment" onClick={()=> dispatch(increment(4))} ><span>add</span></a>
    </div>
        </>
    )
}
export default App;