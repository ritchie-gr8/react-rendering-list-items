import movies from "../data/movies";

function ShowMovie() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[40px] text-neutral-950 mt-8 mb-8">Movie List</h1>
      </div>
      {/* หัวๆๆๆๆๆๆๆ */}
      <section className="grid md:grid-cols-2 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item bg-white rounded-xl p-4 mb-8 shadow-lg w-[400px]">
            <img src={movie.image} alt={movie.title} className="w-[103px] h-[100px] rounded-xl mb-4" />
            <div>
              <h3 className="text-xl font-bold">{movie.title}</h3>
              <p>Year: {movie.year}</p>
              <p>Runtime: {movie.runtime}</p>
              <p className="flex flex-wrap space-x-2 space-y-1">Genres: {movie.genres.map((genre) => (
                <span key={genre} className="text-base px-2.5 py-1 bg-[#EAAC99] w-fit rounded-xl h-fit flex md:flex-row">{genre}</span>
              ))}</p>
              <p>IMDB Ratings: {movie.imdbRating}</p>
              <p>IMDB Votes: {movie.imdbVotes}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
export default ShowMovie;