const Movies = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white bg-green-900">
      <h1 className="mb-6 text-3xl font-bold">Movies</h1>
      <p className="mb-8 text-lg text-center">
        Discover, curate, and share your top 10 movies. Start building your list
        today.
      </p>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder movie cards */}
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="p-4 transition bg-gray-800 rounded-lg shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">Movie Title {index + 1}</h2>
            <p className="text-sm text-gray-400">
              Short description or tagline
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
