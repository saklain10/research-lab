// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // ✅ ইমেজ ডোমেইন কনফিগারেশন যোগ করা হলো
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // আপনার ইমেজ হোস্টিং ডোমেন
        // আপনি চাইলে এখানে port এবং pathname ও যোগ করতে পারেন, তবে এইটুকু যথেষ্ট।
      },
    ],
  },
};

export default nextConfig;



