import React, { useState } from 'react';

const FilterSortComponent = ({ onFilterChange }) => {
  const [orderBy, setOrderBy] = useState('words'); // 預設排序字段
  const [order, setOrder] = useState('ASC'); // 預設升序
  const [filterClass, setFilterClass] = useState(''); // 詞性篩選
  const [filterLevel, setFilterLevel] = useState(''); // 難度篩選

  const handleFilterChange = () => {
    // 將最新的排序和篩選條件傳給父組件
    onFilterChange({
      orderBy,
      order,
      filterClass,
      filterLevel,
    });
  };

  // 當篩選或排序條件改變時，觸發父組件更新
  const handleChange = (setter) => (event) => {
    setter(event.target.value);
    handleFilterChange();
  };

  return (
    <div>
      {/* 排序選單 */}
      <div>
        <label>Sort by: </label>
        <select value={orderBy} onChange={handleChange(setOrderBy)}>
          <option value="words">Words</option>
          <option value="level">Level</option>
          <option value="class">Class</option>
        </select>

        <label>Order: </label>
        <select value={order} onChange={handleChange(setOrder)}>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>

      {/* 篩選選單 */}
      <div>
        <label>Filter by Class: </label>
        <select value={filterClass} onChange={handleChange(setFilterClass)}>
          <option value="">All</option>
          <option value="noun">Noun</option>
          <option value="verb">Verb</option>
          <option value="adjective">Adjective</option>
          <option value="adverb">Adverb</option>
        </select>

        <label>Filter by Level: </label>
        <select value={filterLevel} onChange={handleChange(setFilterLevel)}>
          <option value="">All</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortComponent;
