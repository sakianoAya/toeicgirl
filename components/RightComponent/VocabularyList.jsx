import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilterSortComponent from './FilterSortComponent';


const VocabularyList = () => {
  const [vocabulary, setVocabulary] = useState([]);
  const [filteredVocabulary, setFilteredVocabulary] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 呼叫 PHP API 獲取資料
    axios
      .get('http://localhost/get_vocab.php') // 呼叫php取得資料
      .then((response) => {
        setVocabulary(response.data);
        setLoading(false);
        setFilteredVocabulary(response.data);// 設定初始資料=完整資料
      })
      .catch((error) => {
        console.error('Error fetching vocabulary data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleFilterSort =(filterSortData) => { // 處理排序和篩選後的資料
    setFilteredVocabulary(filterSortData);      // 設定篩選後的資料
  };

  return (
    <div>
      <h1>TOEIC  List</h1>
      <FilterSortComponent 
        vocabulary={vocabulary} 
        onFilterChange={handleFilterSort} 
      />
      <ul>
        {vocabulary.map((item) => (
          <li key={item.id}>
            <strong>{item.words}</strong> ({item.class}): {item.japanese}
            <br />
            <em>{item.sentence}</em> - {item.level} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VocabularyList;
