// // // import Footer from '../../components/Footer';
// // // import Navbar from '../../components/Navbar';
// // // import './globals.css';


// // // // Metadata for SEO (Search Engine Optimization)
// // // export const metadata = {
// // //   title: 'EE Renewable Research Lab',
// // //   description: 'Research group focused on Electrical and Renewable Energy Engineering.',
// // // };

// // // export default function RootLayout({ children }) {
// // //   return (
// // //     <html lang="en">
// // //       <body className="flex flex-col min-h-screen">
// // //         <Navbar />
// // //         {/* Main content area */}
// // //         <main className="flex-grow">
// // //           {children}
// // //         </main>
// // //         <Footer/>
// // //       </body>
// // //     </html>
// // //   );
// // // }


// // import './globals.css';
// // import { Nunito } from 'next/font/google'; // Nunito ফন্ট আমদানি
// // import Footer from '../../components/Footer';
// // import Navbar from '../../components/Navbar';

// // // Configure Nunito font
// // const nunito = Nunito({ 
// //     subsets: ['latin'],
// //     weight: ['400', '600', '700', '800', '900'], // প্রয়োজনীয় ওয়েটগুলো নির্বাচন
// //     variable: '--font-nunito', // Tailwind এ ব্যবহারের জন্য ভেরিয়েবল নাম
// // });

// // export const metadata = {
// //   title: 'EE Renewable Research Lab',
// //   description: 'Research group focused on Electrical and Renewable Energy Engineering.',
// // };

// // export default function RootLayout({ children }) {
// //   // `nunito.className` এবং `nunito.variable` বডিতে যুক্ত করা হলো
// //   return (
// //     <html lang="en" className={`${nunito.variable}`}>
// //       <body className={`flex flex-col min-h-screen font-nunito`}>
// //         <Navbar/>
// //         {/* Main content area */}
// //         <main className="flex-grow">
// //           {children}
// //         </main>
// //         <Footer/>
// //       </body>
// //     </html>
// //   );
// // }

// import Footer from '../../components/Footer';
// import Navbar from '../../components/Navbar';
// import './globals.css';

// import { Nunito } from 'next/font/google'; 

// // Configure Nunito font
// const nunito = Nunito({ 
//     subsets: ['latin'],
//     weight: ['400', '600', '700', '800', '900'], 
//     variable: '--font-nunito',
// });

// export const metadata = {
//   title: 'EEE Renewable Research Lab',
//   description: 'Research group focused on Electrical and Renewable Energy Engineering.',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${nunito.variable} bg-white`}>
//       <body className={`flex flex-col min-h-screen font-nunito bg-white`}>
//         <Navbar/>
//         <main className="flex-grow bg-white">
//           {children}
//         </main>
//         <Footer/>
//       </body>
//     </html>
//   );
// }


// app/layout.js
import './globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'; // ✅ নতুন আমদানি
import AOSProvider from '../../components/AOSProvider'; 
import { Nunito } from 'next/font/google'; 
// ... বাকি ফন্ট কনফিগারেশন

const nunito = Nunito({ 
    subsets: ['latin'],
    weight: ['400', '600', '700', '800', '900'], 
    variable: '--font-nunito',
});

export const metadata = {
  title: 'EE Renewable Research Lab',
  description: 'Research group focused on Electrical and Renewable Energy Engineering.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body className={`flex flex-col min-h-screen font-nunito bg-white`}> 
        <Navbar />
        <AOSProvider> 
          <main className="flex-grow">
            {children}
          </main>
        </AOSProvider>
        {/* ✅ Footer যোগ করা হলো */}
        <Footer />
      </body>
    </html>
  );
}