import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      This page doesn't exist. Go <Link to="/search">search.</Link>
    </div>
  );
};

export { NotFoundPage };
