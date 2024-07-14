import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "react-router-dom";

import { MovieCard } from "../../components/MovieCard/MovieCard";
import { SortByDateOrRating } from "../../components/Sort/SortByDateOrRating";
import { sortMovies } from "../../components/Sort/sortMovies";

import "./SearchPage.css";

const getMovieDetails = async (imdbID) => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=${
      import.meta.env.VITE_OMDB_KEY
    }`
  );
  return response.json();
};

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortType, setSortType] = useState("Year");
  const [isLoading, setIsLoading] = useState(false);

  const movieQuery = searchParams.get("movie") || "";
  const normalizedInput = movieQuery.trim().toLowerCase();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    setSearchParams({ movie: query });
    setPage(1);
  };

  const searchLoader = async ({ params }) => {
    const query = params.movie;
    const response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${
        import.meta.env.VITE_OMDB_KEY
      }&page=${page}`
    );
    return response.json();
  };

  useEffect(() => {
    if (normalizedInput) {
      setIsLoading(true);
      searchLoader({ params: { movie: normalizedInput } }).then((data) => {
        if (data.Search) {
          Promise.all(
            data.Search.map((movie) => getMovieDetails(movie.imdbID))
          ).then((details) => {
            if (page === 1) {
              setMovies(details);
            } else {
              setMovies((prevMovies) => [...prevMovies, ...details]);
            }
            setTotalResults(data.totalResults);
            setIsLoading(false);
          });
        } else {
          setMovies([]);
          setTotalResults(0);
          setIsLoading(false);
        }
      });
    } else {
      setMovies([]);
      setTotalResults(0);
      setIsLoading(false);
    }
  }, [normalizedInput, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const sortedMovies =
    sortType && movies.length > 0
      ? sortMovies(movies, sortType, sortOrder)
      : [];

  return (
    <div>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="search-sort-container"
      >
        <div className="search-form">
          <input
            type="search"
            name="search"
            defaultValue={normalizedInput}
            className="search-input"
            placeholder="Movie, series..."
          />
          <input type="submit" value="Search" className="search-button" />
        </div>

        <SortByDateOrRating
          sortType={sortType}
          sortOrder={sortOrder}
          setSortType={setSortType}
          setSortOrder={setSortOrder}
        />
      </form>

      <div className="movie-cards">
        {sortedMovies.map(
          (movie) =>
            movie &&
            movie.imdbRating &&
            movie.imdbRating !== "N/A" &&
            movie.Poster &&
            movie.Poster !== "N/A" &&
            movie.Type &&
            (movie.Type.includes("movie") || movie.Type.includes("series")) &&
            movie.Runtime &&
            movie.Runtime !== "N/A" && (
              <MovieCard key={movie.imdbID} movie={movie} />
            )
        )}
      </div>

      {isLoading && <h2 className="films-loading">Loading...</h2>}

      {!isLoading && movies.length === 0 && normalizedInput.length > 0 && (
        <>
          <p className="light-text">
            Nothing was found for the "{normalizedInput}" query.
          </p>
          <h1 className="light-text">
            Check the correctness of the entered request.
          </h1>
        </>
      )}

      {!isLoading && normalizedInput.length === 0 && (
        <>
          <p className="light-text">Enter the name of the movie or series.</p>
        </>
      )}

      {movies.length < totalResults && (
        <button onClick={loadMore} className="button-more-films">
          More films
        </button>
      )}
    </div>
  );
};

export { SearchPage };