import { useAsyncValue } from "react-router-dom";

import { formatRuntime } from "../Format/FormatRuntime";
import { formatDate } from "../Format/FormatDate";

import "./FilmInformation.css";

const FilmInformation = () => {
  const movie = useAsyncValue();
  const rountyme = formatRuntime(movie.Runtime);
  const releaset = formatDate(movie.Released);

  const details = [
    { title: "Plot", content: movie.Plot },
    { title: "Actors", content: movie.Actors },
    { title: "Director", content: movie.Director },
    { title: "Writer", content: movie.Writer },
    { title: "Awards", content: movie.Awards },
    { title: "BoxOffice", content: movie.BoxOffice },
    { title: "totalSeasons", content: movie.totalSeasons },
  ];

  return (
    <>
      <div className="film-info">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="big-movie-poster"
        />
        <div className="film-details">
          <p className="film-title">{movie.Title}</p>

          <div className="film-info-row">
            <div className="first-column">
              <p className="text-title">Rountyme</p>
              <p className="detail-content">{rountyme}</p>
            </div>
            <div>
              <p className="text-title">Type</p>
              <p className="detail-content">{movie.Type}</p>
            </div>
          </div>

          <div className="film-info-row">
            <div className="first-column">
              <p className="text-title">Released</p>
              <p className="detail-content">{releaset}</p>
            </div>
            <div>
              <p className="text-title">Rating ({movie.imdbVotes} Votes)</p>
              <p className="detail-content">{movie.imdbRating}/10</p>
            </div>
          </div>

          <div className="film-info-row">
            <div className="first-column">
              <p className="text-title">Genre</p>
              <p className="detail-content">{movie.Genre}</p>
            </div>
            <div>
              <p className="text-title">Country </p>
              <p className="detail-content">{movie.Country}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text">
        {details.map((detail, index) => (
          <div key={index}>
            {detail.content && detail.content !== "N/A" && (
              <>
                <p className="text-title">{detail.title}</p>
                <p className="detail-content">{detail.content}</p>
              </>
            )}
          </div>
        ))}
      </div>

      {movie.Ratings && (
        <>
          <p className="text-title">Rating from different sources</p>
          {movie.Ratings.map((rating, index) => (
            <div key={index} className="detail-content">
              {rating.Source}: {rating.Value}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export { FilmInformation };
