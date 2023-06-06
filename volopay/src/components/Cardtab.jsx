import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import Card from './Card'


const Cardtab = () => {
const [datas,Setdatas]=useState([])


const handleYouclick=()=>{
    
        axios.get("http://localhost:3001/data")
        .then((data)=>{
        console.log(data.data)
        Setdatas(data.data)
        }).catch((erroe)=>{
         console.log(erroe)
        })
}

  return (
    <>
      <div className='tabs'>
        <div onClick={handleYouclick}>your</div>
        <div onClick={handleYouclick}>all</div>
        <div onClick={handleYouclick}>blocked</div>
      </div>
      <div className='cardList'>
      {datas.map((e)=>(
  <Card key={e.owner_id} {...e}/>
  ))}
      </div>

    
    </>
  )
}

export default Cardtab
