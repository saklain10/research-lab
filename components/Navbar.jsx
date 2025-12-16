// // // import Link from 'next/link';

// // // const navLinks = [
// // //   { name: 'Home', href: '/' },
// // //   { name: 'Research', href: '/research' },
// // //   { name: 'Members', href: '/members' },
// // //   { name: 'Publications', href: '/publications' },
// // //   { name: 'Opportunities', href: '/opportunities' },
// // //   { name: 'Contact', href: '/contact' },
// // // ];

// // // const Navbar = () => {
// // //   return (
// // //     <nav className="bg-green-800 p-4">
// // //       <div className="container mx-auto flex justify-between items-center">
// // //         {/* Lab Title/Logo */}
// // //         <Link href="/" className="text-2xl font-bold text-white hover:text-green-400 transition duration-300">
// // //           Energy Innovation Laboratory
// // //         </Link>

// // //         {/* Navigation Links */}
// // //         <div className="hidden md:flex space-x-6">
// // //           {navLinks.map((link) => (
// // //             <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white transition duration-300 font-medium">
// // //               {link.name}
// // //             </Link>
// // //           ))}
// // //         </div>

// // //         {/* Mobile menu button (can be implemented later) */}
// // //         {/* <button className="md:hidden text-white">...</button> */}
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;


// // // components/Navbar.jsx
// // "use client"; 

// // import Link from 'next/link';
// // import { useState, useEffect } from 'react';
// // import { usePathname } from 'next/navigation'; // ✅ Active link জানার জন্য

// // const navLinks = [
// //   { name: 'Home', href: '/' },
// //   { name: 'Research', href: '/research' },
// //   { name: 'Members', href: '/members' },
// //   { name: 'Publications', href: '/publications' },
// //   { name: 'Opportunities', 'href': '/opportunities' },
// //   { name: 'Contact', href: '/contact' },
// // ];

// // const Navbar = () => {
// //   // মোবাইল মেনু টগল করার জন্য স্টেট
// //   const [isOpen, setIsOpen] = useState(false);
// //   // বর্তমান পাথ নেওয়ার জন্য হুক
// //   const pathname = usePathname();

// //   // মেনু টগল করার ফাংশন
// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };
  
// //   // মেনু আইটেমে ক্লিক করার পর মেনু বন্ধ করার ফাংশন (মোবাইল ভিউয়ের জন্য)
// //   const handleLinkClick = () => {
// //     setIsOpen(false);
// //   };

// //   // রুট পরিবর্তন হলে মেনু বন্ধ করার জন্য (ইউজার যদি ব্যাক বাটন বা অন্য কোনোভাবে ন্যাভিগেট করে)
// //   useEffect(() => {
// //     setIsOpen(false);
// //   }, [pathname]);


// //   return (
// //     // ✅ আপনার দেওয়া বিদ্যমান ক্লাস এবং পজিশন
// //     <nav className="bg-green-800 p-4 sticky top-0 z-50 shadow-md"> 
// //       <div className="container mx-auto flex justify-between items-center">
        
// //         {/* Lab Title/Logo */}
// //         <Link 
// //           href="/" 
// //           className="text-2xl font-bold text-white hover:text-green-400 transition duration-300"
// //           onClick={handleLinkClick}
// //         >
// //           Energy Innovation Laboratory
// //         </Link>

// //         {/* 1. Desktop Navigation Links (md এবং এর থেকে বড় স্ক্রিনের জন্য) */}
// //         <div className="hidden md:flex space-x-6"> 
// //           {navLinks.map((link) => {
// //             // বর্তমান লিঙ্ক Active কিনা তা পরীক্ষা করা হচ্ছে
// //             const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            
// //             return (
// //               <Link 
// //                 key={link.name} 
// //                 href={link.href} 
// //                 className={`
// //                   text-gray-300 hover:text-white transition duration-300 font-medium tracking-wide relative pb-1
// //                   ${isActive 
// //                     ? 'text-white border-b-2 border-white' // ✅ Active Class Styling (আন্ডারলাইন)
// //                     : 'hover:text-white' // Hover Class Styling
// //                   }
// //                 `}
// //               >
// //                 {link.name}
// //               </Link>
// //             );
// //           })}
// //         </div>

// //         {/* 2. Mobile Menu Button (md এর থেকে ছোট স্ক্রিনের জন্য) */}
// //         <button 
// //           className="md:hidden text-white focus:outline-none z-50"
// //           onClick={toggleMenu}
// //           aria-label="Toggle Menu"
// //         >
// //           {/* Hamburger/Close Icon (Tailwind SVG Icon) */}
// //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //             {/* মেনু খোলা থাকলে, X আইকন দেখাও */}
// //             {isOpen ? (
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
// //             ) : (
// //               // মেনু বন্ধ থাকলে, Hamburger আইকন দেখাও
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
// //             )}
// //           </svg>
// //         </button>

// //       </div>

// //       {/* 3. Mobile Navigation Menu (পর্দার উপর স্লাইড ইন) */}
// //       <div 
// //         // ✅ ব্যাকগ্রাউন্ডে আপনার Navbar কালারের কাছাকাছি একটি কালার সেট করা হলো
// //         className={`fixed top-0 left-0 h-full w-64 bg-gray-700 transition-transform duration-300 transform shadow-2xl z-40 md:hidden 
// //           ${isOpen ? 'translate-x-0' : '-translate-x-full'}` 
// //         }
// //         aria-hidden={!isOpen}
// //       >
// //         <div className="pt-20 flex flex-col space-y-4 p-4">
// //           {navLinks.map((link) => {
// //             const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            
// //             return (
// //               <Link 
// //                 key={link.name} 
// //                 href={link.href} 
// //                 onClick={handleLinkClick} // ✅ ক্লিক করলে মেনু বন্ধ হবে
// //                 className={`
// //                   text-lg font-semibold py-2 px-3 rounded transition duration-300
// //                   ${isActive 
// //                     ? 'bg-gray-600 text-white border-l-4 border-white' // ✅ Active Class Styling
// //                     : 'text-gray-300 hover:bg-gray-600 hover:text-white'
// //                   }
// //                 `}
// //               >
// //                 {link.name}
// //               </Link>
// //             );
// //           })}
// //         </div>
// //       </div>
      
// //       {/* 4. Overlay (মেনু খোলা থাকলে হালকা কালো আস্তরণ) */}
// //       {isOpen && (
// //         <div 
// //           className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" 
// //           onClick={toggleMenu} // overlay তে ক্লিক করলেও মেনু বন্ধ হবে
// //         />
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // components/Navbar.jsx
// "use client"; 

// import Link from 'next/link';
// import Image from 'next/image'; // ✅ Image কম্পোনেন্ট আমদানি করা হলো
// import { useState, useEffect } from 'react';
// import { usePathname } from 'next/navigation'; 

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'Research', href: '/research' },
//   { name: 'Members', href: '/members' },
//   { name: 'Publications', href: '/publications' },
//   { name: 'Opportunities', 'href': '/opportunities' },
//   { name: 'Contact', href: '/contact' },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   // স্ক্রল ফাংশনালিটির জন্য স্টেট
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
  
//   const handleLinkClick = () => {
//     setIsOpen(false);
//   };
  
//   // ✅ স্ক্রল হ্যান্ডলার ফাংশন: উপরে স্ক্রল করলে শো, নিচে স্ক্রল করলে হাইড
//   const controlNavbar = () => {
//     if (isOpen) return;
//     // নিচে স্ক্রল করলে (Scroll Down)
//     if (window.scrollY > lastScrollY && window.scrollY > 100) { 
//       setShowNavbar(false);
//     } 
//     // উপরে স্ক্রল করলে (Scroll Up)
//     else {
//       setShowNavbar(true);
//     }
//     setLastScrollY(window.scrollY);
//   };
  
//   useEffect(() => {
//     window.addEventListener('scroll', controlNavbar);
//     return () => {
//       window.removeEventListener('scroll', controlNavbar);
//     };
//   }, [lastScrollY, isOpen]); 

//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);


//   return (
//     // ✅ fixed পজিশন এবং dynamic transform
//     <nav className={`
//       bg-green-800 p-4 shadow-md z-50 fixed w-full top-0 
//       transition-transform duration-300 ease-in-out
//       ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
//     `}> 
//       <div className="container mx-auto flex justify-between items-center">
        
//         {/* Lab Title/Logo (Local Image) */}
//         <Link 
//           href="/" 
//           className="flex items-center space-x-2"
//           onClick={handleLinkClick}
//         >
//           {/* ✅ লোকাল 'public/images/logo.png' পাথ ব্যবহার করা হলো */}
//           <Image
//             src="/images/logo.png" 
//             alt="Energy Innovation Laboratory Logo"
//             width={36} 
//             height={36} 
//             priority
//             // w-auto h-9 ক্লাসগুলো লোগোর আকারের জন্য সহায়ক
//             className="w-auto h-9" 
//           />
//           {/* লোগো টেক্সট ছোট স্ক্রিনে হাইড করা হয়েছে */}
//           <span className="hidden sm:inline text-2xl font-bold text-white hover:text-green-400 transition duration-300">
//             Energy Innovation Laboratory
//           </span>
//         </Link>

//         {/* 1. Desktop Navigation Links */}
//         <div className="hidden md:flex space-x-6"> 
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            
//             return (
//               <Link 
//                 key={link.name} 
//                 href={link.href} 
//                 className={`
//                   text-gray-300 hover:text-white transition duration-300 font-medium tracking-wide relative pb-1
//                   ${isActive 
//                     ? 'text-white border-b-2 border-white' // Active Class Styling
//                     : 'hover:text-white' 
//                   }
//                 `}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>

//         {/* 2. Mobile Menu Button */}
//         <button 
//           className="md:hidden text-white focus:outline-none z-50"
//           onClick={toggleMenu}
//           aria-label="Toggle Menu"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>

//       </div>

//       {/* 3. Mobile Navigation Menu */}
//       <div 
//         // ✅ কালার bg-green-700 এ পরিবর্তন করা হলো
//         className={`fixed top-0 left-0 h-full w-64 bg-green-700 transition-transform duration-300 transform shadow-2xl z-40 md:hidden 
//           ${isOpen ? 'translate-x-0' : '-translate-x-full'}` 
//         }
//         aria-hidden={!isOpen}
//       >
//         <div className="pt-20 flex flex-col space-y-4 p-4">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            
//             return (
//               <Link 
//                 key={link.name} 
//                 href={link.href} 
//                 onClick={handleLinkClick} 
//                 className={`
//                   text-lg font-semibold py-2 px-3 rounded transition duration-300
//                   ${isActive 
//                     ? 'bg-green-900 text-white border-l-4 border-white' 
//                     : 'text-gray-300 hover:bg-green-900 hover:text-white'
//                   }
//                 `}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>
//       </div>
      
//       {/* 4. Overlay */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" 
//           onClick={toggleMenu} 
//         />
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// components/Navbar.jsx
"use client"; 

import Link from 'next/link';
import Image from 'next/image'; // ✅ local image ব্যবহারের জন্য import করা হলো
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; 

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Members', href: '/members' },
  { name: 'Publications', href: '/publications' },
  { name: 'Opportunities', 'href': '/opportunities' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  // মোবাইল মেনু টগল করার জন্য স্টেট
  const [isOpen, setIsOpen] = useState(false);
  // বর্তমান পাথ নেওয়ার জন্য হুক
  const pathname = usePathname();

  // স্ক্রল ফাংশনালিটির জন্য স্টেট
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // মেনু টগল করার ফাংশন
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // মেনু আইটেমে ক্লিক করার পর মেনু বন্ধ করার ফাংশন (মোবাইল ভিউয়ের জন্য)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // ✅ স্ক্রল হ্যান্ডলার ফাংশন: উপরে স্ক্রল করলে শো, নিচে স্ক্রল করলে হাইড
  const controlNavbar = () => {
    if (isOpen) return;
    // নিচে স্ক্রল করলে (Scroll Down)
    if (window.scrollY > lastScrollY && window.scrollY > 100) { 
      setShowNavbar(false);
    } 
    // উপরে স্ক্রল করলে (Scroll Up)
    else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, isOpen]); 

  // রুট পরিবর্তন হলে মেনু বন্ধ করার জন্য 
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);


  return (
    // ✅ fixed পজিশন এবং dynamic transform যোগ করা হলো
    <nav className={`bg-green-800 p-4 sticky top-0 z-50 shadow-md
      ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
    `}> 
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Lab Title/Logo */}
        <Link 
          href="/" 
          // ✅ টেক্সট লোগো থেকে ইমেজ লোগোতে পরিবর্তন করা হলো
          className="flex items-center space-x-2"
          onClick={handleLinkClick}
        >
          {/* ✅ লোকাল Image (public/images/logo.png) ব্যবহার করা হলো */}
          <Image
            src="/images/logo.png" 
            alt="Energy Innovation Laboratory Logo"
            width={36} 
            height={36} 
            priority
            className="w-auto h-9" 
          />
          <span className="hidden sm:inline text-2xl font-bold text-white hover:text-green-400 transition duration-300">
            Energy Innovation Laboratory
          </span>
        </Link>

        {/* 1. Desktop Navigation Links (md এবং এর থেকে বড় স্ক্রিনের জন্য) */}
        <div className="hidden md:flex space-x-6"> 
          {navLinks.map((link) => {
            // বর্তমান লিঙ্ক Active কিনা তা পরীক্ষা করা হচ্ছে
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`
                  text-gray-300 hover:text-white transition duration-300 font-medium tracking-wide relative pb-1
                  ${isActive 
                    ? 'text-white border-b-2 border-white' // ✅ Active Class Styling (আন্ডারলাইন)
                    : 'hover:text-white' // Hover Class Styling
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* 2. Mobile Menu Button (md এর থেকে ছোট স্ক্রিনের জন্য) */}
        <button 
          className="md:hidden text-white focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {/* Hamburger/Close Icon (Tailwind SVG Icon) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* মেনু খোলা থাকলে, X আইকন দেখাও */}
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // মেনু বন্ধ থাকলে, Hamburger আইকন দেখাও
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* 3. Mobile Navigation Menu (পর্দার উপর স্লাইড ইন) */}
      <div 
        // ✅ ব্যাকগ্রাউন্ডে আপনার Navbar কালারের কাছাকাছি একটি কালার সেট করা হলো (bg-green-700)
        className={`fixed top-0 left-0 h-full w-64 bg-green-700 transition-transform duration-300 transform shadow-2xl z-40 md:hidden 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}` 
        }
        aria-hidden={!isOpen}
      >
        <div className="pt-20 flex flex-col space-y-4 p-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={handleLinkClick} // ✅ ক্লিক করলে মেনু বন্ধ হবে
                className={`
                  text-lg font-semibold py-2 px-3 rounded transition duration-300
                  ${isActive 
                    ? 'bg-green-900 text-white border-l-4 border-white' // ✅ Active Class Styling
                    : 'text-gray-300 hover:bg-green-900 hover:text-white'
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      
      {/* 4. Overlay (মেনু খোলা থাকলে হালকা কালো আস্তরণ) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" 
          onClick={toggleMenu} // overlay তে ক্লিক করলেও মেনু বন্ধ হবে
        />
      )}
    </nav>
  );
};

export default Navbar;



