import React, {useContext} from 'react';
import {AppContext} from '../App';

const Key = ({keyVal, big, inactive}) => {

  const { onEnter, onDelete, onSelect } = useContext(AppContext);
  const Selectletter = () =>{
      if(keyVal === "Enter"){
        onEnter();
      }
      else if(keyVal === "Back" ){
       onDelete();
      }
      else{
        onSelect(keyVal);
      }
  }
  
  return (
    <div className='keyval' id={big ? "big": inactive && "inactive"} onClick={Selectletter}>
      {keyVal}
    </div>
  )
}

export default Key
