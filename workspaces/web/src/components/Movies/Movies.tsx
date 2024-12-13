import { useEffect, useRef, useState } from "react";
import PlayIcon from "../icons/Play.icon";
import ArrowIcon from "../icons/Arrow.icon";
import './Movies.css';
import TickIcon from "../icons/Tick.icon";
import { useLiteflixContext } from "../../context/context";
import { Movie } from "liteflix-models";
import AsyncBg from "../AsyncBg/AsyncBg";

enum MOVIE_OPTIONS {
  '',
  'POPULARES',
  'MIS PELÍCULAS'
}

const Movies = () => {
  const [showMovies, setShowMovies] = useState<MOVIE_OPTIONS>(1);
  const [showOptionsPopup, setShowOptionsPopup] = useState(false);
  const { popular } = useLiteflixContext();
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
    <div className="Movies__items">
      {popular.map(({ backdrop_path, id, title }: Movie) => {
        return <AsyncBg key={id} className="Movies__item" bgUrl={backdrop_path}>
          <div tabIndex={0} className="Movies__item-play">
            <PlayIcon />
          </div>
          <span className="Movies__item-title">{title}</span>
        </AsyncBg>;
      })}
    </div>
  </aside>
}

export default Movies;
