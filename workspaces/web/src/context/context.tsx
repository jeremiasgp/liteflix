import { Movie } from 'liteflix-models';
import { createContext, useState, useContext, useEffect } from 'react';
import axios, { AxiosProgressEvent } from 'axios';

type NewMovieRequestPayload = { picture: File, title: string };

type LiteflixContextModel = {
  featured: Movie | null,
  popular: Array<Movie>,
  userMovies: Array<Movie>,
  isLoading: boolean,
  setIsLoading: (loading: boolean) => void,
  showNewMovieModal: boolean,
  setShowNewMovieModal: (show: boolean) => void,
  saveUserMovie: (movie: NewMovieRequestPayload, uploadProgress: (n: number) => void, onErrorHandler: () => void) => void
}

const initialCOntextValues: LiteflixContextModel = {
  featured: null,
  popular: [],
  isLoading: false,
  userMovies: [],
  showNewMovieModal: false,
  saveUserMovie: (movie: NewMovieRequestPayload, uploadProgress: (n: number) => void, onErrorHandler: () => void) => console.info(movie, uploadProgress, onErrorHandler),
  setShowNewMovieModal: (show: boolean) => console.info(show),
  setIsLoading: (loading: boolean) => console.info(loading)
};

const LiteflixContext = createContext<LiteflixContextModel>(initialCOntextValues);


export const LiteflixProvider = ({ children }: { children: React.ReactNode }) => {
  const [userMovies, setUserMovies] = useState<Array<Movie>>([]);
  const [popular, setPopular] = useState<Array<Movie>>([]);
  const [featured, setFeatured] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showNewMovieModal, setShowNewMovieModal] = useState(false);

  const saveUserMovie = async({ picture, title }: NewMovieRequestPayload, updateProgress: (percent: number) => void, onErrorHandler: () => void) => {
    const formData = new FormData();
    formData.append('title', title)
    formData.append('picture', picture);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          const total = progressEvent.total || progressEvent.loaded;
          const percentageCompleted =
            Math.round((progressEvent.loaded * 100) / total);
            updateProgress(percentageCompleted);
        },
        onError: () => onErrorHandler()
    };
    const { data: { values: userMovies } } = await axios.post<NewMovieRequestPayload, { data: { values: Array<Movie> } }>(`http://localhost:5005/movie`, formData, config)
    const _userMovies = userMovies.map((movie: Movie) => ({...movie, backdrop_path: `http://localhost:5005/uploads/${movie.backdrop_path}`}));
    setUserMovies(_userMovies.length > 4 ? _userMovies.slice(-4, _userMovies.length) : _userMovies);
  }

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
    <LiteflixContext.Provider value={{ userMovies, saveUserMovie, featured, isLoading, setIsLoading, popular, showNewMovieModal, setShowNewMovieModal }}>
      {children}
    </LiteflixContext.Provider>
  );
};


export const useLiteflixContext = () => {
  return useContext(LiteflixContext);
};
