import React, { useState } from 'react';
import './Filter.css';

function Filter({ onFilterChange }) {
  const [category, setCategory] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ category, maxPrice });
  };

  return (
    <div className="filter-container">
      <h2>Filter Courses</h2>
      <form onSubmit={handleSubmit}>
        <div className="filter-item">
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Design">Design</option>
          </select>
        </div>
        <div className="filter-item">
          <label htmlFor="price">Max Price:</label>
          <input
            type="number"
            id="price"
            value={maxPrice}
            onChange={handlePriceChange}
            placeholder="Enter max price"
          />
        </div>
        <button type="submit" className="filter-submit">Apply Filters</button>
      </form>
    </div>
  );
}

export default Filter;
