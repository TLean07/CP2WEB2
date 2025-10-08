import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api, { image_path_w500, image_path_w1280 } from '../services/api';
import { Spinner } from "../components/Spinner";
import { motion } from 'framer-motion';

export function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get(`/movie/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Spinner /></div>;
  if (!movie) return <p className="text-center text-xl mt-10">Filme não encontrado.</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${image_path_w1280}${movie.backdrop_path})` }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <motion.img
              layoutId={`movie-poster-${id}`}
              className="w-full rounded-lg shadow-2xl" 
              src={`${image_path_w500}${movie.poster_path}`} 
              alt={movie.title}
            />
            <div className="md:col-span-2 text-white">
              <h1 className="text-4xl md:text-6xl mb-4">{movie.title}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-yellow-400 font-bold text-2xl">⭐ {movie.vote_average.toFixed(1)}</span>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map(genre => (
                    <span key={genre.id} className="bg-white/20 text-sm px-3 py-1 rounded-full">{genre.name}</span>
                  ))}
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-8">{movie.overview}</p>
              <Link to="/" className="inline-block bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                &larr; Voltar para a lista
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}