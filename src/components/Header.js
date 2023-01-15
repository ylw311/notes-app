import React from 'react';

const Header = ({handleToggleDarkMode}) => {
    return (
        <div className = "header">
            <h1>Write some note to me :) </h1> 
            <button onClick={() => handleToggleDarkMode((previousMode)=> !previousMode)} className='save'>Dark/Light</button>
        </div>
       
    )
}

export default Header;