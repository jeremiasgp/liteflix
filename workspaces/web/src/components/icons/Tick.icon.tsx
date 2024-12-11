import { IconProps } from "./icons.type";

const TickIcon = ({width = 14, height = 11}: IconProps) => {
  return <svg {...{width, height}} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 5L5 9L13 1" stroke="currentColor" stroke-width="2"/>
  </svg>;
}

export default TickIcon;