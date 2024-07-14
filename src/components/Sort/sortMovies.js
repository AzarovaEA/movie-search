const sortMovies = (movies, sortType, sortOrder) => {
  return sortType === "Year"
    ? movies.slice().sort((a, b) => {
        const dateA = new Date(a.Year.split("–")[0]);
        const dateB = new Date(b.Year.split("–")[0]);
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      })
    : movies.slice().sort((a, b) => {
        return sortOrder === "asc"
          ? parseFloat(a.imdbRating) - parseFloat(b.imdbRating)
          : parseFloat(b.imdbRating) - parseFloat(a.imdbRating);
      });
};

export { sortMovies };
