import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder art is local, author-controlled SVG (no user uploads) —
    // safe to allow while real product photography isn't in yet.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
};

export default nextConfig;
