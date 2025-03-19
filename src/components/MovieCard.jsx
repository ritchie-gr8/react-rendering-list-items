import React from "react";

const MovieCard = ({ movie }) => {
  const { title, year, runtime, image, genres, imdbRating, imdbVotes } = movie;
  return (
    <div className="flex gap-4 p-4 shadow-md text-lg max-w-[400px] rounded-xl bg-white">
      <div className="w-[100px] h-[100px] min-w-[100px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <ul className="flex flex-col w-full max-h-[260px] gap-1.5">
        <li>Title: {title}</li>
        <li>Year: {year}</li>
        <li>Runtime: {runtime}</li>
        <li className="flex flex-wrap space-x-2 space-y-1">
          <span className="mr-1">Genres:</span>
          {genres.map((genre) => (
            <span
              key={title + year + genre}
              className="text-base px-2.5 py-1 bg-[#EAAC99] w-fit rounded-xl h-fit flex"
            >
              {genre}
            </span>
          ))}
        </li>
        <li>IMDB Rating: {imdbRating}</li>
        <li>IMDB Votes: {imdbVotes}</li>
      </ul>
    </div>
  );
};

export default MovieCard;
