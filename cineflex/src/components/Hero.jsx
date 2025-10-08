export function Hero({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative h-96 md:h-[500px] flex items-center justify-center text-center -mt-20">
       <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2070')`}}></div>
      <div className="relative z-20 px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">Filmes, séries e muito mais.</h2>
        <p className="text-lg text-gray-300 mb-8">Explore um universo de entretenimento.</p>
        <input
          type="text"
          placeholder="Buscar por título..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-brand-light-dark/70 border-2 border-transparent focus:border-brand-accent focus:ring-0 rounded-full py-3 px-6 w-full max-w-lg text-white placeholder-gray-400 transition-all duration-300"
        />
      </div>
    </div>
  );
}