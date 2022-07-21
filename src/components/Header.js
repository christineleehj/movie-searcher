import React from 'react';

const Header = (props) => {
    return (
        <header className="App-header">
        <a href="/"><img src="react-logo.png" className="App-logo" alt="logo" /></a>
        <h3>{props.heading}</h3>
      </header>
    )
}

export default Header;