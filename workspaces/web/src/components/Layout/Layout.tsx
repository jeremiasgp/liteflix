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
  const bgMovieClasses = bgImage ? `bg-cover bg-[url('https://image.tmdb.org/t/p/original/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg')]` : '';

  return <div className={`Layout__wrapper ${bgMovieClasses}`}>
  <div className='Layout__container'>
  <header className="Layout__header">
    <section className="Layout__header-actions">
      <h1 tabIndex={0} className="Layout__logo"><span className="!font-[700]">LITE</span>FLIX</h1>
      <button className="Layout__add-movie"><PlusIcon /><span className="inline-block ml-[12px]">Agregar pelicula</span></button>
    </section>
    <div className="Layout__user-actions">
      <span tabIndex={0} className="Layout__user-action"><HamburgerIcon /></span>
      <span tabIndex={0} className="Layout__user-action"><NotificationIcon /></span>
      <span tabIndex={0} className="Layout__user-action"><img src="assets/profile.png" alt="Perfil" width={40} height={40} /></span>
    </div>
  </header>
    <main role='main'>
      {children}
      { false && <AddMovieModal />}
    </main>
  </div>
</div>
};

export default Layout;