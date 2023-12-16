import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
const Die = (props) => {
  const dieFaces = {
    1: faDiceOne,
    2: faDiceTwo,
    3: faDiceThree,
    4: faDiceFour,
    5: faDiceFive,
    6: faDiceSix
  }
  const styles = {
    backgroundColor: "#59E391",
  }
  return (
     <main className='die--body'>
       {props.isHeld 
        ?  
        <div 
       style={styles}  className='die--face'>
        <FontAwesomeIcon icon= {dieFaces[props.value]} size='6x' onClick={props.onHold} />
        </div> 
        : 
        <div  className='die--face'>
         <FontAwesomeIcon icon= {dieFaces[props.value]} size='6x' onClick={props.onHold} />
        </div>}
    </main>
  )
}

export default Die