import React from "react";
import PlusIcon from "../icons/Plus.icon";

type Props = {
  bgImage?: string,
  children: React.ReactNode
};

const Layout = ({bgImage, children}: Props) => {
  const bgMovieClasses = bgImage ? `bg-cover bg-[url('https://image.tmdb.org/t/p/original/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg')]` : '';

  return <div className={`w-screen h-screen ${bgMovieClasses}`}>
  <div className='container h-screen mx-auto pt-[32px] '>
  <header className="w-full h-[40px] flex justify-between items-center">
    <section aria-name="HeaderActions" className="w-[367px] flex justify-between">
      <h1 className="text-[34px] leading[34px] tracking-[4px] font-[400] text-[#64EEBC]"><span className="!font-[700]">LITE</span>FLIX</h1>
      <button className="text-[18px] leading[18px] tracking-[4px] font-[400] flex items-center"><PlusIcon /><span className="inline-block ml-[12px]">Agregar pelicula</span></button>
    </section>
    <div aria-name="UserActions" className="flex justify-end">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
  </header>
    <main role='main'>
      {children}
    </main>
  </div>
</div>
};

export default Layout;