import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { image_path_w500 } from '../services/api';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function MovieCard({ movie, index }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: index * 0.05 }}
      layoutId={`movie-poster-${movie.id}`}
      className="relative rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300"
    >
      <Link to={`/movie/${movie.id}`}>
        <img className="w-full h-96 object-cover" src={`${image_path_w500}${movie.poster_path}`} alt={movie.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{movie.title}</h3>
          <span className="text-brand-accent font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">⭐ {movie.vote_average.toFixed(1)}</span>
        </div>
      </Link>
    </motion.div>
  );
}