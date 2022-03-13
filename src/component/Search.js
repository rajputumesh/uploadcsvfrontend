import React from 'react';

const Search = ({value,searchchange}) => {
    return (
        <input type='text' placeholder='Search' className='form-control' onChange={searchchange} className="w-20"/>
    )
}

export default Search;