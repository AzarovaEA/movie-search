import { Suspense } from "react";
import {
  useLoaderData,
  useNavigate,
  defer,
  Await,
  useAsyncValue,
} from "react-router-dom";

import "./FilmPage.css";

import { FilmInformation } from "../../components/FilmInformations/FilmInformation";

const FilmPage = () => {
  const { movie, imdbID } = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="film-page">
      <button onClick={goBack} className="button-go-back">
        Go back
      </button>
      <Suspense fallback={<h2 className="details-loading">Information about film loading...</h2>}>
        <Await resolve={movie}>
          <FilmInformation />
        </Await>
      </Suspense>
    </div>
  );
};

async function getFilmById(imdbID) {
  const res = await fetch(
    `https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=${
      import.meta.env.VITE_OMDB_KEY
    }`
  );

  if (!res.ok) {
    throw new Response("", { status: res.status, statusText: "Not found!!!" });
  }

  return res.json();
}

const filmLoader = async ({ params }) => {
  const imdbID = params.imdbID;

  return { movie: getFilmById(imdbID), imdbID };
};

export { FilmPage, filmLoader };
