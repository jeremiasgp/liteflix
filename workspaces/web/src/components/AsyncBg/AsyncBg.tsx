import { useEffect, useState } from "react";
import { useLiteflixContext } from "../../context/context";

type Props = {
  className: string,
  bgUrl: string,
  children: React.ReactNode,
  tabindex?: number
};

const AsyncBg = ({className, bgUrl, children}: Props) => {
  const [bgImage, setBgImage] = useState('');
  const { setIsLoading } = useLiteflixContext();

  useEffect(() => {
    setIsLoading(true);
    const img = new Image();
    img.src = bgUrl;
    img.onload = () => {
      setBgImage(bgUrl);
      setIsLoading(false);
    };
  }, [bgUrl]);

  return <div className={`${className}`} style={{ backgroundImage: `url(${bgImage})` }}>{children}</div>;
};

export default AsyncBg;
