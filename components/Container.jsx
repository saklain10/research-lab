// components/Container.jsx

/**
 * A reusable component for consistent layout padding and centering.
 * Ensures full responsiveness and consistent vertical margin/padding.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - The content to be wrapped.
 * @param {string} [props.className=''] - Optional custom class names.
 */
const Container = ({ children, className = '' }) => {
  // mx-auto: Center the content
  // px-4 (default): Small padding on mobile
  // sm:px-6: Slightly more padding on small screens
  // lg:px-8: Standard padding on large screens
  // py-12: Consistent vertical padding (Tailwind '12' is 3rem or 48px)
  const baseClasses = 'container mx-auto px-4 sm:px-6 lg:px-8 py-12';
  
  return (
    // আমরা py-12 ব্যবহার করছি, যা আপনার 'margin-y 11/12' এর কাছাকাছি একটি কনসিস্টেন্ট মান।
    // প্রয়োজন হলে, আপনি `py-[44px]` বা `py-[48px]` এর পরিবর্তে অন্য কোনো মান সেট করতে পারেন।
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Container;