import * as React from "react";
const SvgCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="circle_svg__bi circle_svg__bi-circle"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
  </svg>
);
export default SvgCircle;
