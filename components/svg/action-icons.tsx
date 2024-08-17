import { SVGProps } from 'react';

export type SVGType = SVGProps<SVGSVGElement>;

export const PlayIcon = (props: SVGType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 5v14a2 2 0 0 0 2.75 1.84L20 13.74a2 2 0 0 0 0-3.5L7.75 3.14A2 2 0 0 0 5 4.89"
        fill="none"
        stroke="#888888"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export const BookIcon = (props: SVGType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <path
        d="M347.621 64c-40.941 0-79.121 14-91.578 44.495C242.5 78 205.408 64 164.466 64 109.265 64 64 89.98 64 143v283h22.14c12.86-26.334 44.238-42 78.325-42 40.224 0 73.877 27.528 81.617 64h19.714c7.739-36.472 41.495-64 81.722-64 34.085 0 61.149 11.666 78.429 42H448V143c0-53.02-45.177-79-100.379-79zM248 410.926C230 385.055 199.27 368 164.5 368c-34.769 0-64.5 10.055-83.5 35.926l-1 .537V141c3-41.825 40.089-61 84.293-61 45.162 0 82.145 18.708 83.363 61.808-.017.729.016 1.459.016 2.192l.328 13.103v253.823zM432 148v255.926C414 378.055 382.269 368 347.5 368c-34.77 0-65.5 17.055-83.5 42.926V144c0-44.112 37.659-64 83.587-64C391.79 80 429 91.175 432 133v15z"
        fill="#888888"
      ></path>
    </svg>
  );
};

export const BookmarkIcon = (props: SVGType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="transparent" stroke="#888888" d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3l7 3V5c0-1.1-.9-2-2-2"></path>
    </svg>
  );
};
