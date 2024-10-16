/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {hostname: "images.pexels.com"},
            {hostname: "i.tribune.com.pk"},
            {hostname: "www.pexels.com"},
        ],
    }
};

export default nextConfig;
