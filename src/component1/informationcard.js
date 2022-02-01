
import React from 'react'
import { useHistory } from 'react-router-dom';
import cardsData from './cardsDatas'
import Lenovodata from './lenovo'
import  gamingLenovodata from './gamingdata'
import  expensive_laptop from './expensive_lap_data'
const Card =(props)=>{
    const history=useHistory()
    
    const Card = (props) => (
        <div className="card" onClick={()=>history.push('/product',{props})}>
          <img src={ props.imgUrl } 
            alt={ props.alt || 'Image' } />
          <div className="card-content">
            <h4>{ props.title }</h4>
              <h5>{props.prize}</h5>
              <strike>{props.prize}</strike>
            <p>{ props.content }</p>
            
          </div>
        </div>
      );
      
      const CardContainer = (props) => (
        <div className="cards-container">
          {
            props.cards.map((card) => (
              <Card title={ card.title }
                content={ card.content }
                imgUrl={ card.imgUrl }
                
                prize={ card.prize }
                />
            ))
          }
        </div>
      ); 
      
      
      
      return(
          <>
        
          <h1 style={{ 'text-align': 'center' ,'margin':"20px"  ,
}}>
           {props.brand}
          </h1>
          
          <CardContainer cards={ cardsData } />
          <CardContainer cards={ Lenovodata  } />
          <CardContainer cards={ Lenovodata  } />
          <CardContainer cards={ gamingLenovodata  } />
          <CardContainer cards={ expensive_laptop  } />
        
          </>
      );
   
  }
  


  export default Card;


// import React from 'react'

// import { useHistory } from 'react-router-dom';
// const Card=()=>{
//     const history= useHistory()
//     const rediret=()=>{

//         history.push('/detail')
//     }
// return(
//     <>

// <div class="cards">
//      <span></span>
//      <div class="content" onClick={()=>rediret()} >
//   <img src="https://www.mtwmag.com/wp-content/uploads/2020/07/Toolcard-Cutting-tools-online.jpg" alt="" srcset="" />
//      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit laudantium labore minima, dolore tenetur assumenda suscipit dolorum in eligendi ipsum est nostrum repudiandae et impedit magnam omnis non pariatur!</h4>
//      </div>
     

//  </div>

//     </>
// )
// }
// export default Card;