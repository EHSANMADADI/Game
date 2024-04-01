
import './App.css';
import { useEffect, useState } from 'react';
import Card from './component/Card';
const cardImages = [
  { "src": "/img/i-2.jpg", "matched": false },
  { "src": "/img/i-3.jpg", "matched": false },
  { "src": "/img/i-1.jpg", "matched": false },
  { "src": "/img/i-4.jpg", "matched": false },
  { "src": "/img/i-5.jpg", "matched": false },
  { "src": "/img/i-6.jpg", "matched": false }
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
    console.log(shuffleCard);
  }



  const [choiseone, setChoiseone] = useState(null);
  const [choisetow, setChoisetow] = useState(null);

  ///handel choise
  const handelchois = (card) => {
    choiseone ? setChoisetow(card) : setChoiseone(card);
  }

  ///compare 2selected cards
  useEffect(() => {
    if (choisetow && choiseone) {///مطمعن میشیم که دوتا عکس انتخاب شده باشد
      if (choisetow.src === choiseone.src) {
        setCards(prevCard => prevCard.map((card) => {
          if (card.src === choisetow.src) {
            
            return { ...card, matched: true }//تغییر یکی از عناصر آبجکت
           
          }
          else
            return card
        }))
        resetchois();
      }
      else {
        console.log("notmatch");
        setTimeout(() => resetchois(), 1000)
      }

    }
  },
    [choiseone, choisetow])

  ////rset choises and incrise  score
  const resetchois = () => {
    setChoiseone(null);
    setChoisetow(null);
    setScore((prevScore) => prevScore + 1);
  }

  const finall = () => {
    let i = 0;
    {
      cards.map((card) => {
        if (card.matched) {
          i++;
          if (i === 15) {
           console.log("complitMatch");
          }
        }
      })

    }
  }


  return (
    <div className="App">

      <div className="hedear">
        <h1 className="border border-4 p-4 text-white">Memory Game {"(:"}</h1>
        <button className="btn btn-primary " onClick={shuffleCards}>New Game</button>
        <h5 className='bg-d p-2 my-3 text-white'>Your number of attempts : {score}</h5>
      </div>

      <div className="card-grid mx-3">
        {cards.map((card, index) => (
          <Card card={card} handelchois={handelchois} flipped={card === choiseone || card === choisetow || card.matched} />
        ))}
         { finall()}
      

      </div>
    </div>
  );
}


export default App
