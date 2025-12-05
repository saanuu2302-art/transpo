import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      width="100"
      height="20"
      {...props}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="'Playfair Display', serif"
        fontSize="16"
        fontWeight="bold"
        fill="url(#grad1)"
      >
        Transpo
      </text>
    </svg>
  );
}

export function GeminiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5V15H8v-2.5h2.5V10H14v2.5h2.5V15H14v2.5h-3.5zm7-5.5H16V9.5h1.5v-3h-3V8H16v1.5h-1.5v3h3V12zm-9.5-3H8v-3h3V8H9.5v1.5z" />
    </svg>
  );
}
