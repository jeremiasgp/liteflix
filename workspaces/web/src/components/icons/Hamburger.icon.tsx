import { IconProps } from "./icons.type";

const HamburgerIcon = ({width = 27, height = 14}: IconProps) => {
  return <svg {...{width, height}} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1H27" stroke="currentColor"/>
  <path d="M0 7H27" stroke="currentColor"/>
  <path d="M10 13H27" stroke="currentColor"/>
  </svg>;
}

export default HamburgerIcon;
