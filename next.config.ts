import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  async redirects() {
    return [
      { source: "/home.html", destination: "/", permanent: true },
      { source: "/servicos.html", destination: "/servicos", permanent: true },
      { source: "/contato.html", destination: "/contacto", permanent: true },
      { source: "/contato", destination: "/contacto", permanent: true },
    ];
  },
};

export default nextConfig;
