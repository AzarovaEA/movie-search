import { Link, Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to="/">Sinemagic</CustomLink>
        <CustomLink to="/search">Search film</CustomLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">
        {" "}
        <p>&copy; 2024 Sinemagic. All rights reserved.</p>
      </footer>
    </>
  );
};

export { Layout };
