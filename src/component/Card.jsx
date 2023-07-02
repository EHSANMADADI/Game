import React from 'react'
import'./card.css'
export default function Card(props) {
  const handelClick=()=>{
    props.handelchois(props.card)
  }
  return (
    <div>
      <div key={props.card.id} className="Card">
          <div>
          <img src={props.card.src} className="w-75"/>
          <img src='./img/cover.jpg' className="w-75" onClick={handelClick}/>
          </div>
        </div>
    </div>
  )
}
