import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>This page doesn't exist!</div>;
    }

    if (error.status === 401) {
      return <div>You aren't autorized to see this.</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down.</div>;
    }
  }

  return (
    <div>
      <h1>Error: {error.status}</h1>
      <h1>{error.statusText || "Something goes wrong!"}</h1>
    </div>
  );
}

export default ErrorPage;
