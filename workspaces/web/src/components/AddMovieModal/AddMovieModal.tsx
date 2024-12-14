import { useState } from 'react';
import { useLiteflixContext } from '../../context/context';
import ClipIcon from '../icons/Clip.icon';
import CloseIcon from '../icons/Close.icon';
import './AddMovieModal.css';

type Props = {
  uploadProgress: number,
  error: boolean,
  onReTry: () => void
};

const UploadProgress = ({ uploadProgress, error, onReTry }: Props) => {
  return error ? (
    <div className="UploadProgress__wrapper">
    <span className="UploadProgress__error">¡ERROR! NO SE PUDO CARGAR LA PELÍCULA</span>
    <div className="UploadProgress__bar">
      <div className="UploadProgress__bar--error"></div>
    </div>
    <span onClick={() => onReTry()} className="UploadProgress__re-try">REINTENTAR</span>
  </div>
  ) : 
  (<div className="UploadProgress__wrapper">
    <span className="UploadProgress__loading">CARGANDO {uploadProgress}%</span>
    <div className="UploadProgress__bar">
      <div className="UploadProgress__bar--success" style={{width: `${uploadProgress}%`}}></div>
    </div>
  </div>)
}

const AddMovieModal = () => {
  const { setShowNewMovieModal, saveUserMovie } = useLiteflixContext();
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File>();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [saving, setSaving] = useState(false);
  const [onError, setOnError] = useState(false);

  const onErrorHandler = () => {
    setOnError(true);
  }

  const saveMovie = async (e?: React.FormEvent<HTMLFormElement>) => {
    e && e.preventDefault();
    if (file && title) {
      setSaving(true);
      await saveUserMovie({ title, picture: file }, setUploadProgress, onErrorHandler);
      setSaving(false);
      setShowNewMovieModal(false);
    }
  };

  return <div tabIndex={0} className="Add-movie__overlay">
    <form className="Add-movie__modal" onSubmit={saveMovie}>
      <button type="button" tabIndex={0} className="Add-movie__modal-close" onClick={() => setShowNewMovieModal(false)}>
        <CloseIcon />
      </button>
      <h2 className="Add-movie__title">AGREGAR PELÍCULA</h2>
      {saving ? (<UploadProgress uploadProgress={uploadProgress} error={onError} onReTry={saveMovie} />) : 
        (<label className="Add-movie__file-label">
          <ClipIcon />
          <span className="Add-movie__file-text">
            AGREGÁ UN ARCHIVO <span className="max-sm:hidden">O ARRASTRALO Y SOLTALO AQUÍ</span>
          </span>
          <input
            type="file"
            name="file"
            className="Add-movie__file-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.files && setFile(e.target.files[0])}
            />
        </label>)
      }
      
      <label aria-label="Título">
      <input
        placeholder="TÍTULO"
        className="Add-movie__title-input"
        name="title" value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
      </label>
      <button type="submit" className="btn__add-movie" disabled={!title || !file || saving}>SUBIR PELÍCULA</button>
      <button type="button" className="btn__close-modal" onClick={() => setShowNewMovieModal(false)}>SALIR</button>
    </form>
  </div>
}

export default AddMovieModal;
