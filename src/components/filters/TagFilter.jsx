import React from 'react';
import './TagFilter.css';

const TagFilter = ({ tags, activeTag, onSelectTag }) => {
  return (
    <div className="tag-filter">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`tag-button ${tag === activeTag ? 'active' : ''}`}
          onClick={() => onSelectTag(tag === activeTag ? null : tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;