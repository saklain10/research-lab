// // // export default function Home() {
// // //   return (
// // //     <div className="container mx-auto p-8">
// // //       <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
// // //         Welcome to the Energy Innovation Laboratory
// // //       </h1>
// // //       <p className="text-lg text-gray-600">
// // //         Dedicated to advancing research in smart grids, solar optimization, and power electronics.
// // //       </p>
// // //       <div className="mt-10 p-6 bg-green-50 rounded-lg border border-green-200">
// // //         <h2 className="text-2xl font-semibold text-green-700">Next Step:</h2>
// // //         {/* <p className="text-green-600 mt-2">
// // //           এখন আপনার নেভিগেশন বারটি কাজ করবে এবং আপনার প্রজেক্টের বেস লেআউট প্রস্তুত।
// // //           আমরা পরবর্তী ধাপে **Members** এবং **Research** পেজগুলিতে কন্টেন্ট তৈরি করব।
// // //         </p> */}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import Container from '../../components/Container'; 
// // export default function Home() {
// //   return (
// //     <Container>
// //       <h1 className="text-5xl font-extrabold text-gray-800 mb-6 border-b pb-4">
// //         Welcome to the Energy Innovation Laboratory
// //       </h1>
// //       <p className="text-xl text-gray-600 mb-8">
// //         Dedicated to advancing cutting-edge research in **Electrical and Renewable Energy Engineering**. Our focus areas include smart grids, solar optimization, and power electronics.
// //       </p>

// //       {/* Example Section */}
// //       <section className="mt-12">
// //         <h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>
// //         <div className="grid md:grid-cols-2 gap-8">
// //           <p className="text-gray-700">
// //             To innovate sustainable energy solutions and train the next generation of researchers to tackle global energy challenges.
// //           </p>
// //           <p className="text-gray-700">
// //             We aim to publish high-impact research in top-tier journals and contribute actively to industrial advancement.
// //           </p>
// //         </div>
// //       </section>
      
// //     </Container>
// //   );
// // }

// import Container from '../../components/Container';
// import HeroCarousel from '../../components/HeroCarousel';

// export default function Home() {
//   return (
//     <>
//       <HeroCarousel/> 
//       <Container>
//         <h1 className="text-5xl font-extrabold text-gray-800 mb-6 border-b pb-4">
//           Welcome to the Energy Innovation Laboratory
//         </h1>
//         <p className="text-xl text-gray-600 mb-8">
//           Dedicated to advancing cutting-edge research in **Electrical and Renewable Energy Engineering**. Our focus areas include smart grids, solar optimization, and power electronics.
//         </p>

//         {/* Example Section */}
//         <section className="mt-12">
//           <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <p className="text-gray-700">
//               To innovate sustainable energy solutions and train the next generation of researchers to tackle global energy challenges.
//             </p>
//             <p className="text-gray-700">
//               We aim to publish high-impact research in top-tier journals and contribute actively to industrial advancement.
//             </p>
//           </div>
//         </section>
        
//         {/* Further sections can be added here, e.g., Latest Research, Key Achievements */}
//         <section className="mt-12">
//           <h2 className="text-3xl font-bold text-primary mb-4">Latest Research Highlights</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-driven Grid Optimization</h3>
//               <p className="text-gray-600 text-sm">Developing intelligent algorithms for efficient power distribution.</p>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Solar Inverters</h3>
//               <p className="text-gray-600 text-sm">Next-generation inverters for improved energy conversion.</p>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Battery Storage Systems</h3>
//               <p className="text-gray-600 text-sm">Enhancing reliability and longevity of energy storage.</p>
//             </div>
//           </div>
//         </section>
//         </Container>
//     </>
//   );
// }


// app/page.js

import HeroSection from '../../components/HeroSection';
import LandingPageContent from '../../components/LandingPageContent';

export default function Home() {
  return (
    <>
      {/* Hero Carousel Section */}
      <HeroSection /> 
      
      {/* All Content below Hero */}
      <LandingPageContent />
    </>
  );
}