import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { SearchPage } from "./pages/SearchPage/SearchPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { FilmPage, filmLoader } from "./pages/FilmPage/FilmPage";
import ErrorPage from "./pages/ErrorPage";

import { Layout } from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<AboutPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route
        path="search/:imdbID"
        element={<FilmPage />}
        loader={filmLoader}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export { router };
