import React from 'react';
function CharacterCount({ value, handleKeyPress}){
    let length = value ? value.length : 0
    return(
      <div className="container">
        <textarea rows="3" onChange={handleKeyPress}></textarea>
        <div className="counter">{length}</div>
      </div>
    );

}

export default CharacterCount;