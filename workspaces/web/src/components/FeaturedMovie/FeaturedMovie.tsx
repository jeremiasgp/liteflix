import { useLiteflixContext } from "../../context/context";
import PlusIcon from "../icons/Plus.icon";
import './FeaturedMovie.css';

const FeaturedMovie = () => {
  const { featured, isLoading } = useLiteflixContext();

  if (isLoading) {
    return 'Loading';
  }
  
  return <section className="FeaturedMovie__wrapper">
      <h2 className="FeaturedMovie__original">ORIGINAL DE <span className="font-[700]">LITEFLIX</span></h2>
      <h1 className="FeaturedMovie__title">{featured?.title || ''}</h1>
      <div className="FeaturedMovie__actions">
        <button className="btn__play">
          <span>REPRODUCIR</span>
        </button>
        <button className="btn__my-list">
        <svg width="248px" height="56px" viewBox="0 0 248 56" className="svg-border">
          <polyline points="247,1 247,55 1,55 1,1 247,1" />
          <polyline points="247,1 247,55 1,55 1,1 247,1" />
        </svg>
          <PlusIcon /><span className="inline-block ml-[12px]">MI LISTA</span>
        </button>
      </div>
    </section>
}

export default FeaturedMovie;
