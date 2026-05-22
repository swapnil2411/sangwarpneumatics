// next.config.ts

import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';

  script-src
    'self'
    'unsafe-inline'
    'unsafe-eval'
    https://www.google.com
    https://www.gstatic.com
    https:;

  style-src
    'self'
    'unsafe-inline'
    https:;

  img-src
    'self'
    data:
    blob:
    https:;

  font-src
    'self'
    data:
    https:;

  connect-src
    'self'
    https://www.google.com
    https://www.gstatic.com
    https:;

  frame-src
    'self'
    https://www.google.com
    https://www.gstatic.com;

  frame-ancestors 'none';

  base-uri 'self';

  form-action 'self';

  object-src 'none';

  upgrade-insecure-requests;
`
  .replace(/\n/g, "")
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },

  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },

  {
    key: "X-Frame-Options",
    value: "DENY",
  },

  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },

  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },

  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;