import { IconProps } from "./icons.type";

const CloseIcon = ({width = 17, height = 17}: IconProps) => {
  return <svg {...{width, height}} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.42892 1.42899L15.5711 15.5711" stroke="currentColor" strokeLinecap="square"/>
  <path d="M1.42892 15.571L15.5711 1.42887" stroke="currentColor" strokeLinecap="square"/>
  </svg>
  
};

export default CloseIcon;
