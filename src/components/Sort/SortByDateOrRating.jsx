import React from "react";
import "./SortByDateOrRating.css";

const SortByDateOrRating = ({
  sortType,
  sortOrder,
  setSortType,
  setSortOrder,
}) => {
  const handleSortTypeChange = (e) => {
    setSortType(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="button-selector">
      <select
        value={sortType}
        onChange={handleSortTypeChange}
        className="selector left"
      >
        <option value="Year">Sort by date</option>
        <option value="imdbRating">Sort by rating</option>
      </select>

      <select
        value={sortOrder}
        onChange={handleSortOrderChange}
        className="selector right"
      >
        <option value="desc">Descending order</option>
        <option value="asc">Ascending order</option>
      </select>
    </div>
  );
};

export { SortByDateOrRating };
