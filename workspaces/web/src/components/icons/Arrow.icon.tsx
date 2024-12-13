import { IconProps } from "./icons.type"

const ArrowIcon = ({width = 13, height = 8}: IconProps) => {
  return <svg {...{width, height}} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1L6.54557 6.54557L12.0911 1" stroke="currentColor" strokeWidth="2"/>
  </svg>
}

export default ArrowIcon;
