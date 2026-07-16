export default function HoneycombPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.025]">
      <svg
        className="absolute w-[1800px] h-[1800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 1200 1200"
        fill="none"
      >
        <defs>
          <pattern
            id="hex"
            width="60"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M15 0L45 0L60 26L45 52L15 52L0 26Z"
              stroke="#A96A08"
              strokeWidth="1.2"
              fill="none"
            />
          </pattern>
        </defs>

        <rect width="1200" height="1200" fill="url(#hex)" />
      </svg>
    </div>
  );
}