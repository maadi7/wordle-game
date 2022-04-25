import React, { useCallback, useContext, useEffect} from 'react';
import Key from './Key';
import { AppContext } from '../App';


const Keyboard = () => {

    const {onDelete, onEnter, onSelect, currAttempt, disabled} = useContext(AppContext);
    const key1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const key2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const key3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const handle = useCallback((event) =>{
      if(event.key === "Enter"){
          onEnter();
      }
      else if(event.key === "Backspace"){
          onDelete();
      }
      else{
          key1.forEach((key) =>{
              if(event.key.toLowerCase() === key.toLowerCase()){
                  onSelect(key);
              }
          });
          key2.forEach((key) =>{
              if(event.key.toLowerCase() === key.toLowerCase()){
                  onSelect(key);
              }
          });
          key3.forEach((key) =>{
              if(event.key.toLowerCase() === key.toLowerCase()){
                  onSelect(key);
              }
          });
      }
    }, [currAttempt]);


    useEffect(() =>{
        document.addEventListener("keydown", handle);
        return () =>{
          document.removeEventListener('keydown', handle);
        };
    
      }, [handle]);
      console.log(disabled);

  return (
    <div className='keyboard' onKeyDown={handle}>
        <div className="line1">
            {key1.map((key) =>{
               return <Key keyVal = {key} inactive={disabled.includes(key)}/>
            })}
        </div>
        <div className="line2">
            {key2.map((key) =>{
               return <Key keyVal = {key} inactive={disabled.includes(key)}/>
            })}
        </div>
        <div className="line3">
            <Key keyVal = "Back" big/>
            {key3.map((key) =>{
               return <Key keyVal = {key} inactive={disabled.includes(key)}/>
            })}
            <Key keyVal = "Enter" big/>
        </div>
      
    </div>
  )
}

export default Keyboard
