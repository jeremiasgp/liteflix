import { useLiteflixContext } from '../../context/context';
import ClipIcon from '../icons/Clip.icon';
import CloseIcon from '../icons/Close.icon';
import './AddMovieModal.css';

const AddMovieModal = () => {
  const { setShowNewMovieModal } = useLiteflixContext();

  return <div tabIndex={0} className="Add-movie__overlay">
    <form className="Add-movie__modal">
      <button type="button" tabIndex={0} className="Add-movie__modal-close" onClick={setShowNewMovieModal.bind(null, false)}>
        <CloseIcon />
      </button>
      <h2 className="Add-movie__title">AGREGAR PELÍCULA</h2>
      <label className="Add-movie__file-label">
        <ClipIcon />
        <span className="Add-movie__file-text">
          AGREGÁ UN ARCHIVO <span className="max-sm:hidden">O ARRASTRALO Y SOLTALO AQUÍ</span>
        </span>
        <input type="file" name="file" className="Add-movie__file-input" />
      </label>
      <label aria-label="Título">
      <input placeholder="TÍTULO" className="Add-movie__title-input" name="title" />
      </label>
      <button type="submit" className="btn__add-movie">SUBIR PELÍCULA</button>
      <button type="button" className="btn__close-modal" onClick={setShowNewMovieModal.bind(null, false)}>SALIR</button>
    </form>
  </div>
}

export default AddMovieModal;
