import { configDoneStyles } from "styles/variables.config";

const { width, height, } = configDoneStyles;

function DoneIcon() {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.50004 6.68951L2.03029 4.21976L0.969788 5.28026L4.50004 8.81051L11.7803 1.53026L10.7198 0.469757L4.50004 6.68951Z"
        fill="#2F80ED"
      />
    </svg>
  );
}

export default DoneIcon;
