import React from 'react'
import '../App.css'
const Card = (props) => {
    const {name,owner_id,budget_name,card_type,expiry,limit}=props
  return (
    <div className='card'>
   
      
      <div className='cardtype'>{card_type}</div>
      <h2> {card_type=='burner'? `Expiry ${expiry}` :  `Limit ${limit}`}</h2>
   
     
    </div>
  )
}

export default Card
