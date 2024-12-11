import { IconProps } from "./icons.type"

const PlusIcon = ({width = 14, height = 14}: IconProps) => {
  return <svg {...{width, height}} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 0V14" stroke="currentColor"/>
  <path d="M14 7L-5.96046e-08 7" stroke="currentColor"/>
  </svg>
}

export default PlusIcon;
