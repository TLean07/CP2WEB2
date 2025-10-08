import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-sm border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <Link to="/">
          <h1 className="text-2xl font-bold tracking-tighter">
            CineFlex
          </h1>
        </Link>
      </div>
    </header>
  );
}