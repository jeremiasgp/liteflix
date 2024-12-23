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
  const [isDrag, setIsDrag] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onErrorHandler = () => {
    setOnError(true);
  }

  const handleDrag = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDrag(true)
    } else if (e.type === 'dragleave') {
      setIsDrag(false)
    }
  }
  
  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDrag(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }
  
  const handleFiles = ([file]: FileList) => {
    if(['image/jpeg', 'image/png'].includes(file.type)){
      setFile(file)
    }
    return;    
  }

  const removeFile = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFile(undefined);
  }

  const saveMovie = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }
    if (file && title) {
      setSaving(true);
      await saveUserMovie({ title, picture: file }, setUploadProgress, onErrorHandler);
      setSaving(false);
      setShowSuccess(true);
    }
  };

  if (showSuccess) {
    return <div tabIndex={0} className="Add-movie__overlay">
      <section className="Add-movie__modal Add-movie__modal--success">
        <button type="button" tabIndex={0} className="Add-movie__modal-close" onClick={() => setShowNewMovieModal(false)}>
          <CloseIcon />
        </button>
        <h1 className="Add-movie__success-title"><span className="font-[700]">LITE</span>FLIX</h1>
        <h2 className="Add-movie__success-congrats">¡FELICITACIONES!</h2>
        <p className="Add-movie__success-text">{title} FUE CORRECTAMENTE SUBIDA.</p>
        <button type="button" onClick={() => setShowNewMovieModal(false) } className="btn__add-movie">IR A HOME</button>
      </section>
    </div>
  }

  return <div tabIndex={0} className="Add-movie__overlay">
    <form className="Add-movie__modal" onSubmit={saveMovie}>
      <button type="button" tabIndex={0} className="Add-movie__modal-close" onClick={() => setShowNewMovieModal(false)}>
        <CloseIcon />
      </button>
      <h2 className="Add-movie__title">AGREGAR PELÍCULA</h2>
      {saving ? (<UploadProgress uploadProgress={uploadProgress} error={onError} onReTry={saveMovie} />) : 
        (<label
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`Add-movie__file-label ${isDrag ? 'bg-white/[.3]' : ''}`}
          >
          <ClipIcon />
          {file ? (
            <div className="Add-movie__file-info">
              <span className="text-[#64eebc]">ARCHIVO: {file?.name}</span>
              <button className="font-[700] cursor-pointer text-[#ff0000]" onClick={removeFile}>REMOVER</button>
            </div>
            ) : (
            <span className="Add-movie__file-text">
              AGREGÁ UN ARCHIVO <span className="max-sm:hidden">O ARRASTRALO Y SOLTALO AQUÍ</span>
            </span>
          ) }
          <input
            type="file"
            name="file"
            className="Add-movie__file-input"
            accept=".png, .jpg, .jpeg"
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
