
import './App.css';
import { useEffect, useState } from 'react';
import Card from './component/Card';
const cardImages = [
  { "src": "/img/i-1.jpg" },
  { "src": "/img/i-2.jpg" },
  { "src": "/img/i-3.jpg" },
  { "src": "/img/i-4.jpg" },
  { "src": "/img/i-5.jpg" },
  { "src": "/img/i-6.jpg" }
]

function App() {
  const [cards, setCards] = useState([])
  const [score, setScore] = useState(0)
  const shuffleCards = () => {
    const shuffleCard = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)///dar in ga ye arry ke az do ta cardImages tashkil shode ro be tor tasadofi moratab mikonib
      .map((card) => ({ ...card, id: Math.random() }))////dar in ga yek id random be har card dadim
    setScore(0)
    setCards(shuffleCard)

  }


  const[choiseone,setChoiseone]=useState(null);
  const[choisetow,setChoisetow]=useState(null);

  ///handel choise
  const handelchois=(card)=>{
    choiseone?setChoisetow(card):setChoiseone(card);
  }


  return (
    <div className="App">

      <div className="hedear">
        <h1 className="border border-4 p-4 text-white">Memory Game {"(:"}</h1>
        <button className="btn btn-primary " onClick={shuffleCards}>New Game</button>
      </div>

      <div className="card-grid">
       {cards.map(card=>( 
       <Card card={card} handelchois={handelchois}  />
       ))}

      </div>


    </div>
  );
}

export default App;
