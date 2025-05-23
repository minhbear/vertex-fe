import { FC, SVGProps } from "react";

const CopyIcon: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M17.5 17V21C17.5 21.2652 17.3946 21.5196 17.2071 21.7071C17.0196 21.8946 16.7652 22 16.5 22H3.5C3.23478 22 2.98043 21.8946 2.79289 21.7071C2.60536 21.5196 2.5 21.2652 2.5 21V8C2.5 7.73478 2.60536 7.48043 2.79289 7.29289C2.98043 7.10536 3.23478 7 3.5 7H7.5V3.007C7.5 2.451 7.949 2 8.507 2H21.493C21.6253 1.99987 21.7563 2.02583 21.8785 2.07639C22.0008 2.12695 22.1118 2.20112 22.2053 2.29465C22.2989 2.38819 22.3731 2.49925 22.4236 2.62148C22.4742 2.74372 22.5001 2.87472 22.5 3.007L22.497 15.993C22.497 16.549 22.048 17 21.49 17H17.5ZM15.5 17H8.507C7.951 17 7.5 16.551 7.5 15.993V9H4.5V20H15.5V17ZM20.497 15L20.5 4H9.5V15H20.497Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CopyIcon;
