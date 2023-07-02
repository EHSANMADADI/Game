import React from 'react'
import './card.css'
export default function Card(props) {
  const handelClick = () => {
    props.handelchois(props.card)
  }
  return (

    <div className="Card">
      <div className={props.flipped ? "flipped" : ""}>
        
        <img className="front" src={props.card.src} />
        <img className='back' src='./img/cover.jpg' onClick={handelClick} />

      </div>
    </div>
  )
}
