import { useEffect, useRef, useState } from "react";
import PlayIcon from "../icons/Play.icon";
import ArrowIcon from "../icons/Arrow.icon";
import './Movies.css';
import TickIcon from "../icons/Tick.icon";

enum MOVIE_OPTIONS {
  '',
  'POPULARES',
  'MIS PELÍCULAS'
}

const Movies = () => {
  const [showMovies, setShowMovies] = useState<MOVIE_OPTIONS>(1);
  const [showOptionsPopup, setShowOptionsPopup] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowOptionsPopup(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  
  const selectMovieOption = (option: MOVIE_OPTIONS) => {
    setShowMovies(option);
  };
  return <aside className="Movies__wrapper">
    <div tabIndex={0} onClick={setShowOptionsPopup.bind(null, !showOptionsPopup)} ref={ref} className="Movies__selector">
      VER: <span className="font-[700] inline-block">{MOVIE_OPTIONS[showMovies]}{' '}</span><span className="inline-block ml-[10px]"><ArrowIcon /></span>
      { showOptionsPopup && <div className="Movies__popup">
        <ul className="Movies__popup-wrapper">
          <li className={showMovies === 1 ? 'font-[700]' : ''} onClick={selectMovieOption.bind(null, 1)}>
            {MOVIE_OPTIONS[1]}{showMovies === 1 && <TickIcon />}
          </li>
          <li className={showMovies === 2 ? 'font-[700]' : ''} onClick={selectMovieOption.bind(null, 2)}>
            {MOVIE_OPTIONS[2]}{showMovies === 2 && <TickIcon />}
          </li>
        </ul>
      </div>}
    </div>
    <ul className="Movies__items">
      <li className={`Movies__item bg-[url('https://image.tmdb.org/t/p/w500/uQhYBxOVFU6s9agD49FnGHwJqG5.jpg')]`}>
        <div className="Movies__item-play">
          <PlayIcon />
        </div>
        <span className="Movies__item-title">MOVIE</span>
      </li>
      <li className={`Movies__item bg-[url('https://image.tmdb.org/t/p/w500/f8H9sLin46B7ka4DEqjemGuiCOB.jpg')]`}>
      <div className="Movies__item-play">
          <PlayIcon />
        </div>
        <span className="Movies__item-title">MOVIE</span>
      </li>
      <li className={`Movies__item bg-[url('https://image.tmdb.org/t/p/w500/cNtAslrDhk1i3IOZ16vF7df6lMy.jpg')]`}>
      <div className="Movies__item-play">
          <PlayIcon />
        </div>
        <span className="Movies__item-title">MOVIE</span>
      </li>
      <li className={`Movies__item bg-[url('https://image.tmdb.org/t/p/w500/4rBObJFpiWJOG7aIlRrOUniAkBs.jpg')]`}>
      <div className="Movies__item-play">
          <PlayIcon />
        </div>
        <span className="Movies__item-title">MOVIE</span>
      </li>
    </ul>
  </aside>
}

export default Movies;
