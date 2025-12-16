// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white p-6 mt-12">
//       <div className="container mx-auto text-center">
//         <p className="text-sm">
//           &copy; {new Date().getFullYear()} Energy Innovation Laboratory. All rights reserved.
//         </p>
//         <p className="text-xs mt-2 text-gray-500">
//           Powered by Next.js and Tailwind CSS
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// components/Footer.jsx
import Link from 'next/link';
import Container from './Container'; // components/Container.jsx হিসেবে ধরে নেওয়া হলো

const Footer = () => {
    return (
        <footer className="bg-green-800 text-white mt-auto">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
                    
                    {/* Column 1: About */}
                    <div>
                        <h4 className="text-xl font-bold mb-4 text-primary-light">Energy Innovation Laboratory</h4>
                        <p className="text-sm text-gray-400">
                            Pioneering research in EV Smart Grids, Battery Degradation, and Renewable Energy Integration.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/research" className="text-gray-400 hover:text-white transition duration-300">Research Areas</Link></li>
                            <li><Link href="/publications" className="text-gray-400 hover:text-white transition duration-300">Publications</Link></li>
                            <li><Link href="/opportunities" className="text-gray-400 hover:text-white transition duration-300">Opportunities</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Contact Info</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="mailto:kazi@example.com" className="hover:text-white transition duration-300">Email: kazi@example.com</a></li>
                            <li>Phone: +880 1XXXXXXXXX</li>
                            <li>Address: EE Dept, [University Name]</li>
                        </ul>
                    </div>
                    
                     {/* Column 4: Social Media (Placeholder) */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                        <div className="flex flex-col space-x-4 text-gray-400">
                            {/* Dummy Social Icons */}
                            <a href="#" className="hover:text-primary-light transition duration-300">LinkedIn</a>
                            <a href="#" className="hover:text-primary-light transition duration-300">ResearchGate</a>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="text-center pt-6 text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Energy Innovation Laboratory. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;