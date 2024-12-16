import { useEffect, useState } from "react";
import './AsyncBg.css';

type Props = {
  className: string,
  bgUrl: string,
  children: React.ReactNode,
  tabindex?: number
};

const AsyncBg = ({className, bgUrl, children}: Props) => {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = bgUrl;
    img.onload = () => {
      setBgImage(bgUrl);
    };
  }, [bgUrl]);

  return <div className={`${className} ${bgImage ? '' : 'AsyncBg__loader'}`} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={`${bgImage ? 'AsyncBg__filter' : ''}`}>
        {children}
      </div>
    </div>;
};

export default AsyncBg;
