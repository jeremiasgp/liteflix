import React from "react";
import PlusIcon from "../icons/Plus.icon";
import HamburgerIcon from "../icons/Hamburger.icon";
import NotificationIcon from "../icons/Notification.icon";
import './Layout.css';
import AddMovieModal from "../AddMovieModal/AddMovieModal";

type Props = {
  bgImage?: string,
  children: React.ReactNode
};

const Layout = ({bgImage, children}: Props) => {
  const bgMovieClasses = bgImage ? `bg-no-repeat bg-[length:auto_80vh] bg-[center_top] sm:bg-cover bg-[url('https://image.tmdb.org/t/p/original/uLqNGzJwnj8JKkKuRM2dHWJKCtc.jpg')]` : '';

  return <div className={`Layout__wrapper ${bgMovieClasses}`}>
  <div className='Layout__container'>
  <header className="Layout__header">
    <section className="Layout__header-actions">
      <h1 tabIndex={0} className="Layout__logo max-sm:order-2 max-sm:relative max-sm:z-[101]"><span className="!font-[700]">LITE</span>FLIX</h1>
      <button className="Layout__add-movie max-sm:order-1"><PlusIcon /><span className="inline-block ml-[12px] hidden sm:inline-block">Agregar pelicula</span></button>
      <div className="Layout__user-actions max-sm:order-last">
        <span tabIndex={0} className="Layout__user-action Layout__user-action--hidden-mobile"><HamburgerIcon /></span>
        <span tabIndex={0} className="Layout__user-action Layout__user-action--hidden-mobile"><NotificationIcon /></span>
        <span tabIndex={0} className="Layout__user-action max-sm:relative max-sm:z-[101]"><img src="assets/profile.png" alt="Perfil" className="max-sm:w-[36px] max-sm:h-[36px] w-[40px] h-[40px]" /></span>
      </div>
    </section>
    
  </header>
    <main role='main'>
      {children}
      { true && <AddMovieModal />}
    </main>
  </div>
</div>
};

export default Layout;