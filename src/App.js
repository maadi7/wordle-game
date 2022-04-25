import React, { useState, createContext, useEffect} from 'react';
import { defaultBoard, genWord } from './Board';
import Game from './Components/Game';
import Gameover from './Components/Gameover';
import './App.css'
import Keyboard from './Components/Keyboard';
export const AppContext = createContext();


const App = () => {

  const [gameOver, setGameOver] = useState({gameover: false, guessword: false});
  const [disabled, setDisabled] = useState([]);
  const [word, setWord] = useState("");
  const [valid, setValid] = useState(new Set());
  const [board, setBoard] = useState(defaultBoard); 
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});

  useEffect(() =>{
     genWord().then((words) =>{
      
      setValid(words.wordSet);
      setWord(words.answer);  
   
    });
  }, []);
  console.log(word);

  const onEnter = () =>{
    if(currAttempt.letterPos !== 5) return;
    let currWord = "";
    for(let i = 0; i<5; i++){
      currWord += board[currAttempt.attempt][i]; 
    } 
  
    
    if(currWord.toLowerCase() === word.toLowerCase()){
      setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0})
      setGameOver({gameover: true, guessword: true});
      return;
    }
    console.log(valid);
    if(valid.has(currWord.toLowerCase())){
      setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0})
    }else{
      alert("Opps!! Invalid Word, try new Word")
    }
    if(currAttempt.attempt === 5){
      setGameOver({gameover: true, guessword: false});
      return;

    }
    
  }
  const onDelete = () =>{
    if(currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos : currAttempt.letterPos-1});

  }
  const onSelect = (keyVal) =>{
    if(currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos : currAttempt.letterPos+1});

  }
  
  
  return (
    <div className='App'>
      <nav>
       <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value = {{ 
      board,
      setBoard,
      currAttempt, 
      setCurrAttempt,
      onEnter,
      onDelete,
      onSelect,
      word,
      gameOver,
      disabled,
      setDisabled,
    
   
      }}>
        <Game />
        {gameOver.gameover ?<Gameover/> : <Keyboard/>}
        
      </AppContext.Provider>
    </div>
  )
}

export default App
