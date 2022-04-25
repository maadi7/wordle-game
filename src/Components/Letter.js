import React, {useContext, useEffect} from 'react';
import {AppContext} from '../App';

const Letter = ({ attemptVal, letterPos }) => {
    
    const { board, word, currAttempt, setDisabled, disabled} = useContext(AppContext);
    const letter = board[attemptVal][letterPos];
    const correct = word[letterPos] === letter.toLowerCase();
    const almost = !correct && letter !== "" && word.includes(letter.toLowerCase());
    const letterState = currAttempt.attempt > attemptVal && 
    (correct ? "correct" : almost ? "almost" : "error"); 

    useEffect(() =>{
      if(letter !== "" && !correct && !almost){
        setDisabled((prev) =>[...prev, letter]);
        console.log(disabled);
      }
    },[currAttempt.attempt]);
    
    return (
    <div className='letter' id = {letterState}>
      {letter}
    </div>
  )
}

export default Letter
