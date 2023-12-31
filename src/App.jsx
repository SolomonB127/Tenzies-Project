import { useEffect,useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Main from './assets/Components/Main';
import Die from './assets/Components/Die';
import './App.css'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
import Video from './assets/hd1722.mov'

function App() {

  function allNewDice(){
    const newDice = [];
    for (let i = 0; i < 10; i++){
      newDice.push(generateNewDie())
    }
   return newDice
  };

  function generateNewDie(){
    return {
      value: Math.ceil(Math.random()  *6),
      isHeld: false,
    id: nanoid()
    }
  };

  const [dieState, setDieState] = useState(allNewDice());

  const [tenzies, setTenzies] = useState(false);

  const [count, setCount] = useState(0);
  useEffect(()=>{
   const allIsHeld = dieState.every(die => die.isHeld);
   const firstValue = dieState[0].value
   const allSameValue = dieState.every(die => die.value === firstValue);
   if(allIsHeld && allSameValue){
    setTenzies(true)
   }
  }, [dieState])

  function holdDice(id){
    setDieState(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }));
  };

  function rollDice(){
    setCount(prevCount => prevCount + 1); 
    if(!tenzies){
      setDieState(oldRoll => oldRoll.map(roll => {
        return roll.isHeld ? roll : generateNewDie()
      }));
    } else{
      setTenzies(false);
      setDieState(allNewDice())
      setCount(0)
    }
  };

  const dieData = dieState.map(die => {
    return <Die 
    key={die.id}
    value = {die.value}
    isHeld = {die.isHeld}
    onHold={ () =>holdDice(die.id)}
    />
  });

  return (
    <>
     <div style={{ position: "fixed", right: 0, bottom: 0, minWidth: "100%", minHeight: "100%", zIndex: -1 }}>
      <video src={Video} autoPlay loop muted type="video/mp4"></video>
    </div>
    {tenzies && <Confetti />}
      <div className='App'>
          <h1 className="title">Tenzies</h1>
              <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className='main'>
            <Main />
           
          </div>

          <div className='die--container'>
          {dieData}
          </div>

          <b>No of times Rolled: {count}</b>

          <button  
           className= "roll--dice"
            onClick={rollDice}
            >{tenzies? "New Game" : "Roll"}
            </button>
          
      </div>
    </>
  )
}

export default App
