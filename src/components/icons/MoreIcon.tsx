import { FC, SVGProps } from "react";

const MoreIcon: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
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
        d="M14 4.5C14 3.675 13.325 3 12.5 3C11.675 3 11 3.675 11 4.5C11 5.325 11.675 6 12.5 6C13.325 6 14 5.325 14 4.5ZM14 19.5C14 18.675 13.325 18 12.5 18C11.675 18 11 18.675 11 19.5C11 20.325 11.675 21 12.5 21C13.325 21 14 20.325 14 19.5ZM14 12C14 11.175 13.325 10.5 12.5 10.5C11.675 10.5 11 11.175 11 12C11 12.825 11.675 13.5 12.5 13.5C13.325 13.5 14 12.825 14 12Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MoreIcon;
