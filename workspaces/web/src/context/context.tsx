import { Movie } from 'liteflix-models';
import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

type LiteflixContextModel = {
  featured: Movie | null,
  popular: Array<Movie>,
  userMovies: Array<Movie>,
  addNewMovie: (movie: Array<Movie>) => void
  isLoading: boolean,
  setIsLoading: (loading: boolean) => void,
  showNewMovieModal: boolean,
  setShowNewMovieModal: (show: boolean) => void,
}

const initialCOntextValues: LiteflixContextModel = {
  featured: null,
  popular: [],
  isLoading: false,
  userMovies: [],
  showNewMovieModal: false,
  setShowNewMovieModal: (show: boolean) => undefined,
  addNewMovie: (movies: Array<Movie>) => undefined,
  setIsLoading: (loading: boolean) => undefined
};

const LiteflixContext = createContext<LiteflixContextModel>(initialCOntextValues);


export const LiteflixProvider = ({ children }: { children: React.ReactNode }) => {
  const [userMovies, addNewMovie] = useState<Array<Movie>>([]);
  const [popular, setPopular] = useState<Array<Movie>>([]);
  const [featured, setFeatured] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showNewMovieModal, setShowNewMovieModal] = useState(false);

  useEffect(() => {
    const getMovies = async() => {
      setIsLoading(true);
      const [{ data: { results: featuredMovies }}, { data: { results: popularMovies }}] = await Promise.all([
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20'),
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20')
      ]);

      const _featured = featuredMovies.map((movie: Movie) => ({...movie, backdrop_path: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`}));
      setFeatured(_featured[Math.floor(Math.random() * _featured.length)]);

      const _popular = popularMovies.map((movie: Movie) => ({...movie, backdrop_path: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}));
      setPopular(_popular.slice(0, 4));
      
      setIsLoading(false);
    };
    getMovies();
  }, []);

  return (
    <LiteflixContext.Provider value={{ userMovies, addNewMovie, featured, isLoading, setIsLoading, popular, showNewMovieModal, setShowNewMovieModal }}>
      {children}
    </LiteflixContext.Provider>
  );
};


export const useLiteflixContext = () => {
  return useContext(LiteflixContext);
};
