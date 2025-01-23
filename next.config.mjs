/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects(){
    return[
      {
        source: "/",
        destination: "/homepage",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
