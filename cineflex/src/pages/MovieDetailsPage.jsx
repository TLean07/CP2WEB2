import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api, { image_path_w500 } from '../services/api';
import { Spinner } from "../components/Spinner";
import { motion } from 'framer-motion';
import { Header } from "../components/Header";

export function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo ao carregar
    setLoading(true);
    api.get(`/movie/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Spinner /></div>;
  if (!movie) return <p className="text-center text-xl mt-10">Filme não encontrado.</p>;

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <img
              className="w-full rounded-lg shadow-2xl" 
              src={`${image_path_w500}${movie.poster_path}`} 
              alt={movie.title}
            />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">{movie.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-bold text-accent">⭐ {movie.vote_average.toFixed(1)}</span>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map(genre => (
                  <span key={genre.id} className="bg-surface text-secondary text-xs font-semibold px-3 py-1 rounded-full">{genre.name}</span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Sinopse</h2>
              <p className="text-secondary leading-relaxed">{movie.overview}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}