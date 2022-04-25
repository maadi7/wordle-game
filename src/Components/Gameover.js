import React, {useContext} from 'react';
import { AppContext } from '../App';

const Gameover = () => {
    const {gameOver, word, currAttempt} = useContext(AppContext);
  return (
    <div className='gameover'>
      <h1>Correct word : {word}</h1>  
      {gameOver.guessword ? <h3>You Won in {currAttempt.attempt} attempts</h3>: <h3>You Lose</h3> }
    </div>
  )
}

export default Gameover
