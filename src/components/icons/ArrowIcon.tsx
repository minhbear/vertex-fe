"use client";

import { FC, SVGProps } from "react";

const ArrowIcon: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...otherProps}>
      <path
        d="M12 13.1719L16.95 8.22192L18.364 9.63592L12 15.9999L5.63599 9.63592L7.04999 8.22192L12 13.1719Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowIcon;
