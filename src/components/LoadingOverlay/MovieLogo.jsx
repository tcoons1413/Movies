import React from "react";

const lPath = "M5 5V19H12V17H7V5Z";
const bPath1 =
  "M13 5.75H17C18.6569 5.75 20 7.09315 20 8.75C20 10.4069 18.6569 11.75 17 11.75H13V5.75Z";
const bPath2 =
  "M13 12.25H17C18.6569 12.25 20 13.5931 20 15.25C20 16.9069 18.6569 18.25 17 18.25H13V12.25Z";
const circlePath =
  "M12 2C6.476 2 2 6.476 2 12C2 17.524 6.476 22 12 22C17.524 22 22 17.524 22 12C22 6.476 17.524 2 12 2Z";

const MovieLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 24 24"
    >
      <path
        d={circlePath}
        fill="none"
        stroke="hsl(35, 75%, 55%)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path d={lPath} fill="hsl(35, 75%, 55%)" />

      <path
        d={bPath1}
        fill="none"
        stroke="hsl(35, 75%, 55%)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d={bPath2}
        fill="none"
        stroke="hsl(35, 75%, 55%)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MovieLogo;
