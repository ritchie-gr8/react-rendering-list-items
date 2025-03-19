import movies from "../data/movies"

function MovieCard (){
   return(
    <>
    <section className="flex flex-col items-center">
        <h1 className="text-[40px] font-bold pb-[70px]">Movie List Section</h1>
        <div className="flex flex-col gap-[80px]"> 
      {movies.map((movie) =>
      <div key={movie.title} className="flex flex-row gap-[20px] px-[18px] py-[18px] w-[400px] h-[250px] rounded-2xl shadow-[0px_10px_60px_10px_#917C7C40]">
        <img className="w-[100px] h-[100px] object-cover rounded-2xl" src={movie.image} />
        <div className="text-xl flex flex-col justify-around ">
          <h2>Title: {movie.title}</h2>
          <h2>Year: {movie.year}</h2>
          <h2>Runtime: {movie.runtime}s</h2>
          <h2>Genres: {movie.genres .filter((value,index)=>index<2)
                                    .map((genres,index)=>
                                        <span className="w-[68px] h-[27px] rounded-[10px] bg-[#EAAC99] text-[16px] px-[10px] py-[4px] mx-[3px]" 
                                        key={index}>{genres}</span>)}
          </h2> 
          <h2>IMDB Ratings: {movie.imdbRating}</h2>
          <h2>IMDB Votes: {movie.imdbVotes}</h2>
        </div>
      </div>
    )}
  </div>
  </section>
  </>
   )
}
export default MovieCard