import React, { useState } from 'react';


function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing]= useState(false);
    
    const clickEditHandler = () =>{
        setIsEditing((editing) =>!editing);

        if(isEditing){
            onChangeName(symbol, playerName)
        }
         
    }
     
    function handleChange (event) {
        setPlayerName(event.target.value)
    }

    let editableplayerName = <span className="player-name">{playerName}</span>
    
    if (isEditing) {
        editableplayerName = <input type='text' required defaultValue={initialName} onChange={handleChange} />
    }
    return (
        <li className={isActive ? "active" : undefined} >
         <span className='player'>
            {editableplayerName}
            <span className="player-symbol">{symbol}</span>
         </span>
         <button onClick={clickEditHandler} >{isEditing ? 'Save': 'Edit'}</button>
       </li>
    )
}

export default Player
