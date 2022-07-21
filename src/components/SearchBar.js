import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="search-container">
            <input 
                className="search" 
                value={props.value}
                onChange={(e)=>props.setSearchTerm(e.target.value)}
                placeholder="Search for movies.."/>
        </div>
    )
}

export default SearchBar;