export default function HeaderLogo() {
  return (
    <svg
      width="115"
      height="32"
      viewBox="0 0 115 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="headerLogoTitle headerLogoDesc"
    >
      <title id="headerLogoTitle">Samanta.me home</title>
      <desc id="headerLogoDesc">A royal blue circle, a yellow triangle and an aqua square</desc>
      <g clipPath="url(#headerLogoClip)">
        <rect width="114.373" height="32" fill="white" />
        <circle cx="16" cy="16" r="16" fill="#2A18D0" />
        <path d="M58.1865 -1L76.3731 30.5H40L58.1865 -1Z" fill="#FDF360" />
        <rect x="84.373" y="1" width="30" height="30" fill="#C6FFE7" />
      </g>
      <defs>
        <clipPath id="headerLogoClip">
          <rect width="114.373" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
