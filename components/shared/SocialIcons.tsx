// lucide-react ya no incluye logos de marca (Instagram/Facebook) — se mantienen
// aquí como SVG propios, con el mismo estilo de trazo que el resto de íconos Lucide.
import type { SVGProps } from "react";

function iconProps(size: number, props?: SVGProps<SVGSVGElement>) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function InstagramIcon({ size = 18, ...props }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(size, props)}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, ...props }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(size, props)}>
      <path d="M15 8h2V4.5h-2A4.5 4.5 0 0 0 10.5 9v2H8v3.5h2.5V21H14v-6.5h2.4l.6-3.5h-3V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}
