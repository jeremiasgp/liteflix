import { IconProps } from "./icons.type";

const NotificationIcon = ({width = 26, height = 26}: IconProps) => {
  return <svg {...{width, height}} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_1_239)">
  <path d="M20.8 8.66661C20.8 6.69643 19.9783 4.80694 18.5155 3.41382C17.0527 2.02069 15.0687 1.23804 13 1.23804C10.9314 1.23804 8.9474 2.02069 7.48462 3.41382C6.02183 4.80694 5.20005 6.69643 5.20005 8.66661C5.20005 17.3333 1.30005 19.8095 1.30005 19.8095H24.7C24.7 19.8095 20.8 17.3333 20.8 8.66661Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.249 23.5238C15.0204 23.899 14.6924 24.2105 14.2977 24.427C13.903 24.6435 13.4555 24.7575 13 24.7575C12.5445 24.7575 12.097 24.6435 11.7023 24.427C11.3076 24.2105 10.9795 23.899 10.751 23.5238" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <circle cx="20.5" cy="5.5" r="4.5" fill="#64EEBC"/>
  <defs>
  <clipPath id="clip0_1_239">
  <rect {...{width, height}} fill="currentColor"/>
  </clipPath>
  </defs>
  </svg>
}

export default NotificationIcon;
