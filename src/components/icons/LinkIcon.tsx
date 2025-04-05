import { FC, SVGProps } from "react";

const LinkIcon: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M14.7138 12.3567L13.5355 11.1784L14.7138 10C15.0233 9.69051 15.2689 9.32303 15.4364 8.9186C15.6039 8.51418 15.6901 8.08071 15.6901 7.64296C15.6901 7.20521 15.6039 6.77174 15.4364 6.36732C15.2689 5.96289 15.0233 5.59541 14.7138 5.28588C14.4043 4.97634 14.0368 4.7308 13.6324 4.56328C13.2279 4.39576 12.7945 4.30954 12.3567 4.30954C11.919 4.30954 11.4855 4.39576 11.0811 4.56328C10.6767 4.7308 10.3092 4.97634 9.99964 5.28588L8.82131 6.46421L7.64298 5.28588L8.82131 4.10754C9.76157 3.18248 11.0293 2.66642 12.3483 2.67179C13.6673 2.67717 14.9308 3.20352 15.8635 4.13622C16.7962 5.06891 17.3225 6.33238 17.3279 7.65139C17.3333 8.97041 16.8172 10.2381 15.8921 11.1784L14.7138 12.3567V12.3567ZM12.3563 14.7142L11.178 15.8925C10.7151 16.363 10.1636 16.7372 9.55537 16.9935C8.94713 17.2498 8.29416 17.3832 7.63413 17.3859C6.9741 17.3886 6.32007 17.2605 5.70976 17.0092C5.09945 16.7579 4.54495 16.3882 4.07824 15.9215C3.61152 15.4547 3.24183 14.9002 2.99049 14.2899C2.73914 13.6796 2.61112 13.0256 2.61381 12.3656C2.6165 11.7055 2.74984 11.0526 3.00614 10.4443C3.26245 9.83608 3.63664 9.28461 4.10714 8.82171L5.28548 7.64338L6.46381 8.82171L5.28548 10C4.97594 10.3096 4.7304 10.6771 4.56288 11.0815C4.39536 11.4859 4.30914 11.9194 4.30914 12.3571C4.30914 12.7949 4.39536 13.2283 4.56288 13.6328C4.7304 14.0372 4.97594 14.4047 5.28548 14.7142C5.59501 15.0237 5.96249 15.2693 6.36692 15.4368C6.77135 15.6043 7.20481 15.6905 7.64256 15.6905C8.08031 15.6905 8.51378 15.6043 8.91821 15.4368C9.32263 15.2693 9.69011 15.0237 9.99964 14.7142L11.178 13.5359L12.3563 14.7142ZM12.3563 6.46421L13.5355 7.64338L7.64298 13.535L6.46381 12.3567L12.3563 6.46504V6.46421Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LinkIcon;
