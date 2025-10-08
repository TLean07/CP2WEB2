import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { MovieList } from '../components/MovieList';
import { ShimmerCard } from '../components/ShimmerCard';
import api from '../services/api';

export function HomePage() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    api.get('/movie/popular')
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(err => {
        console.error("Erro ao buscar filmes:", err);
        setError("Não foi possível carregar os filmes. Verifique sua conexão e a chave da API.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="container mx-auto px-4 py-10">
          {error && <p className="text-center text-red-500 mt-10">{error}</p>}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, i) => <ShimmerCard key={i} />)}
            </div>
          )}
          {!loading && !error && <MovieList movies={filteredMovies} />}
        </div>
      </main>
    </div>
  );
}