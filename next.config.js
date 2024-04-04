/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'yt3.googleusercontent.com'
            }
        ]
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
