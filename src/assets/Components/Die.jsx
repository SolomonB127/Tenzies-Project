import React from 'react'

const Die = (props) => {
  const styles = {
    backgroundColor: "#59E391"
  }
  return (
     <main>
       {props.isHeld 
        ?  
        <div 
       style={styles}  className='die--face'>
          <h2 onClick={props.onHold} className='die--num'>{props.value}</h2>
        </div> 
        : 
        <div  className='die--face'>
          <h2 onClick={props.onHold} className='die--num'>{props.value}</h2>
        </div>}
    </main>
  )
}

export default Die