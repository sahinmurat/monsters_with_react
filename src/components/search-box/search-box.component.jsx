import React from 'react'
import './search-box.styles.css'

function SearcBox({placeholder, handleChange}) {
    return (
        <input 
        className='search'
        type='search' 
        onChange={handleChange }
        placeholder={placeholder} />
    )
}

export default SearcBox
