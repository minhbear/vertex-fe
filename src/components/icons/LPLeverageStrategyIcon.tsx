import { FC, SVGProps } from "react";

const LPLeverageStrategyIcon: FC<SVGProps<SVGSVGElement>> = ({
  ...otherProps
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M5.33333 3.33337H7.33333V9.33337H5.33333V11.3334H4V9.33337H2V3.33337H4V1.33337H5.33333V3.33337ZM3.33333 4.66671V8.00004H6V4.66671H3.33333ZM12 6.66671H14V12.6667H12V14.6667H10.6667V12.6667H8.66667V6.66671H10.6667V4.66671H12V6.66671ZM10 8.00004V11.3334H12.6667V8.00004H10Z"
        fill="#E5E7EB"
        fillOpacity="0.7"
      />
    </svg>
  );
};

LPLeverageStrategyIcon.displayName = "LPLeverageStrategyIcon";
export default LPLeverageStrategyIcon;
