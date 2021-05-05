import React from "react"
import "./SearchBar.css"

function SearchBar(){

    return(
        <div className="search-bar">   
            <form>
                <input type="text" id="search-term"/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;