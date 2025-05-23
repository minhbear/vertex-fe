import { FC, SVGProps } from "react";

const SubmitIcon: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M1.94584 9.31504C1.42384 9.14104 1.41884 8.86004 1.95584 8.68104L21.0428 2.31904C21.5718 2.14304 21.8748 2.43904 21.7268 2.95704L16.2728 22.043C16.1228 22.572 15.8178 22.59 15.5938 22.088L11.9998 14L17.9998 6.00004L9.99984 12L1.94584 9.31504Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SubmitIcon;
