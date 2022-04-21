import React from 'react'
import {Search} from '@material-ui/icons';
const SearchBar = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    const handleExpandBar = (e) => {
        
    }
  return (
    <div id="search">
        <form onSubmit={handleSubmit}>
            <label>
                <button type="submit" ><Search /></button>
                <input type="text" placeholder='Search' />
            </label>
        </form>
        <ul id="results">
            
        </ul>
    </div>
  )
}

export default SearchBar