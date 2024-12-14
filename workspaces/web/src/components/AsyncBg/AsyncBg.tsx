import { useEffect, useState } from "react";

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

  return <div className={`${className}`} style={{ backgroundImage: `url(${bgImage})` }}>{children}</div>;
};

export default AsyncBg;
