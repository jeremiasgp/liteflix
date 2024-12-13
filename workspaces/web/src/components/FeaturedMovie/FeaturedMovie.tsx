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
          REPRODUCIR
        </button>
        <button className="btn__my-list">
          <PlusIcon /><span className="inline-block ml-[12px]">MI LISTA</span>
        </button>
      </div>
    </section>
}

export default FeaturedMovie;
