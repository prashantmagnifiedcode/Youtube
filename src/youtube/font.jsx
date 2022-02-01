import Nav from './navbar'
import Card from './card'
import Menu from './menu'
import  Mobile_Menu from './Mobile_meu.js'
const Front=()=>{
    return(
         <>
         <Nav/>
         <div className="container_menu_or_vid">
            
    <Menu/>
    <Card/>

        </div>
        <Mobile_Menu/>
        </>
    )
}
export default  Front