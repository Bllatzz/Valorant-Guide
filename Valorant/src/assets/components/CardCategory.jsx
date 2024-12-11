import React from 'react';
import PropTypes from 'prop-types';
import '../scss/cards.scss';

const pluralizeCategory = (category) => {
  if (category.endsWith('or')) {
    return `${category}es`;
  }
  return `${category}s`;
};

const CardCategory = ({ category, agents, onClick,  }) => {
  const categoryIcon = agents[0].role.displayIcon;

  return (
    <div 
      className="card-category" 
      onClick={() => onClick(category)} 

    >
       <div className="category-title">{pluralizeCategory(category).toUpperCase()}</div>
      <img src={categoryIcon} alt={category} className="category-image" />
    </div>
  );
};

CardCategory.propTypes = {
  category: PropTypes.string.isRequired,
  agents: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardCategory;
