import { IconProps } from "./icons.type";

const PlayIcon = ({width = 14, height = 14}: IconProps) => {
  return <svg {...{width, height}} viewBox={`0 0 ${width + (width / 7)} ${height + (height / 7)}`} fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M13.6484 8.27005L3 1V15L13.6484 8.27005Z" stroke="currentColor"/>
  </svg>  
}

export default PlayIcon;
