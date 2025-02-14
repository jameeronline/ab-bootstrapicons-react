import * as React from "react";
const SvgDash = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    className="dash_svg__bi dash_svg__bi-dash"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
  </svg>
);
export default SvgDash;
