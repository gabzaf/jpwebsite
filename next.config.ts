import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: ["127.0.0.1"],
  async redirects() {
    return [
      { source: "/home.html", destination: "/", permanent: true },
      { source: "/servicos.html", destination: "/", permanent: true },
      { source: "/servicos", destination: "/", permanent: true },
      { source: "/contato.html", destination: "/", permanent: true },
      { source: "/contato", destination: "/", permanent: true },
      { source: "/contacto", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
