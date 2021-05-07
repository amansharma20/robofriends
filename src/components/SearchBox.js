import React from 'react';

const SearchBox = ({ searchChange }) => {
     return (
         <div>
            <input
                className="pa2 ba b--green bg-lightest-blue mb3"
                type="search"
                placeholder="search robots"
                onChange={searchChange}    
                />
         </div>
     );
}   

export default SearchBox;