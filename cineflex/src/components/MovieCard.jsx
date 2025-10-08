import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { image_path_w500 } from '../services/api';

export function MovieCard({ movie, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.03 }}
      className="flex flex-col"
    >
      <Link to={`/movie/${movie.id}`} className="flex flex-col h-full">
        <div className="mb-4">
          <img 
            className="w-full h-auto object-cover rounded-lg shadow-lg" 
            src={`${image_path_w500}${movie.poster_path}`} 
            alt={movie.title} 
          />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <h3 className="font-bold text-primary truncate">{movie.title}</h3>
          <p className="text-sm text-secondary">⭐ {movie.vote_average.toFixed(1)}</p>
        </div>
      </Link>
    </motion.div>
  );
}