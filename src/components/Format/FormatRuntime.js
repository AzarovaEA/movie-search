const formatRuntime = (runtime) => {
  const minutes = parseInt(runtime, 10);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return hours > 0
    ? `${hours} hour${hours > 1 ? "s" : ""} ${remainingMinutes} min`
    : `${remainingMinutes} min`;
};

export { formatRuntime };
