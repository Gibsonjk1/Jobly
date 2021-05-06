import React, {useState} from "react"
import "./SearchBar.css"

function SearchBar({searchBar}){
    const [formData, setFormData] = useState({
        search: ""
    })
    function handleChange(e){
        setFormData({...formData, 
            [e.target.name]: e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        searchBar(formData);
    }
    return(
       <section className="search-bar">
           <form>
                    <input type="text" placeholder="Search" id="search" name="search" onChange={handleChange}/>
                <button onClick={handleSubmit}>Search!</button>
           </form>
       </section>
    )
}


export default SearchBar;