import { MovieCard } from './MovieCard';

export function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p className="text-center text-gray-400 mt-10">Nenhum filme encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {movies.map((movie, index) => (
        <MovieCard key={movie.id} movie={movie} index={index} />
      ))}
    </div>
  );
}