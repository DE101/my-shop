import React, { useState } from 'react';
import "./App.css";


const SearchBar = ({ products }) => {
const [searchTerm, setSearchTerm] = useState('');
      
const handleSearch = (event) => {
          setSearchTerm(event.target.value);
        };
      
        const filteredProducts = products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    return (
        <div>
            <input type="text" placeholder="search" value={searchTerm} onChange={handleSearch}/>
    
          <ul>
            {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
    )
}

export default SearchBar;