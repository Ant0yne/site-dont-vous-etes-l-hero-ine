/** @type {import('next').NextConfig} */
// cSpell: disable

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				pathname: "/dxyptix0d/image/upload/**",
			},
		],
	},
};

export default nextConfig;
