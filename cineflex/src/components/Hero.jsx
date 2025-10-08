export function Hero({ searchTerm, setSearchTerm }) {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tighter" >
        Seu Catálogo de Filmes.
      </h2>
      <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
        Descubra filmes populares de forma simples e direta.
      </p>
      <input
        type="text"
        placeholder="Buscar por título... (ex: Superman)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-surface border-2 border-zinc-800 focus:border-accent focus:ring-0 rounded-lg py-3 px-6 w-full max-w-lg mx-auto text-primary placeholder-zinc-500 transition-colors"
      />
    </div>
  );
}