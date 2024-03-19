
import React, { useState } from 'react';
import './Toggle.css';
import Search from './Search';

const Toggle = ({ words }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [filteredWords, setFilteredWords] = useState(words);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleSearch = (searchTerm) => {
    const filtered = words.filter((word) =>
      word.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredWords(filtered);
    setActiveIndex(null);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="toggle-container">
        {filteredWords.map((word, index) => (
          <div
            key={index}
            className={`toggle-word ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toggle;
