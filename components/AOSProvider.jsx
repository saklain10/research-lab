// components/AOSProvider.jsx
"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800, // অ্যানিমেশন চলার সময়
      once: true,    // একবার অ্যানিমেট হওয়ার পর আর হবে না
      easing: 'ease-in-out',
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;