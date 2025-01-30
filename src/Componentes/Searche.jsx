import React from "react";

const Search = ( {search, setSaerch} ) => {
    return (
    <div className='search'>
        <h2>Pesquisar</h2>
        <input
        type="text" 
        value={search} 
        onChange={(e) => setSaerch(e.target.value)} 
        placeholder="Digite Para Pesquisar..."
        />
    </div>
    );
};

export default Search;