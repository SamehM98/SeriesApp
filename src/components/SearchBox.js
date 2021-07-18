import React from 'react';

const SearchBox = ({searchChange , goahead}) =>{
    return(

        <div className="pa2">
        <input type="search" placeholder="Search By Title" 
        onChange={searchChange} class="py-1"/>
        <button class="btn btn-primary mx-4" onClick={goahead}>Search</button>
        </div>

    );
}

export default SearchBox;