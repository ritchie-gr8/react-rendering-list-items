import "./App.css";
import MovieCard from "./components/MovieCard";
import movies from "./data/movies";

function App() {
  const testMov = movies[0];
  return (
    <div className="App flex items-center justify-center bg-[#FDFBFB]">
      <section className="movie-list-section">
        <h1 className="text-4xl text-center my-16">Move List Section</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-40">
          {movies.map((movie, idx) => (
            <MovieCard movie={movie} key={idx + movie.title} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
