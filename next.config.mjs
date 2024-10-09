/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {hostname: "images.pexels.com"},
            {hostname: "i.tribune.com.pk"},
        ],
    }
};

export default nextConfig;
