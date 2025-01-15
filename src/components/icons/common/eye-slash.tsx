import { IconProps } from "@core/types";

export default function EyeSlash({
  className = 'icon',
  size = 24,
  color = 'currentColor',
}: IconProps) {
  return (
    <i className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.777 8.459C3.555 9.599 2.741 11 2.413 12.5c.356 1.63 1.288 3.145 2.693 4.334C6.935 18.38 9.415 19.25 12 19.25c1.075 0 2.132-.15 3.132-.437m4.092-2.272c1.221-1.14 2.036-2.541 2.364-4.041-.356-1.63-1.288-3.145-2.693-4.334C17.066 6.62 14.586 5.75 12 5.75c-1.075 0-2.131.15-3.13.437"
        />
        <path
          stroke={color}
          strokeLinecap="round"
          d="M8.287 11.969a3.75 3.75 0 0 0 4.244 4.244m3.182-3.183a3.75 3.75 0 0 0-4.243-4.243m8.78 11.963L3.75 4.25"
        />
      </svg>
    </i>
  );
}
