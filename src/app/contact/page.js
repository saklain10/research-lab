// app/contact/page.js
import Container from '../../../components/Container';

export const metadata = {
  title: 'Contact Us | Energy Innovation Laboratory',
  description: 'Send a direct message or get in touch with the Energy Innovation Laboratory team.',
};

const ContactPage = () => {
  return (
    <Container>
      <h1 className="text-5xl font-extrabold text-primary mb-6 border-b pb-4">
        📧 Get In Touch
      </h1>
      <p className="text-xl text-gray-700 mb-10">
        We welcome collaborations, inquiries about research, and applications for open positions. Please use the form below or contact the PI directly.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Column 1: Contact Information */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-xl h-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Principal Investigator & Location</h2>
          
          {/* PI Info */}
          <div className="space-y-3 text-gray-700 mb-8">
            <p className="font-semibold text-lg text-primary">Prof. Dr. Kazi</p>
            <p>
              **Email:** <a href="mailto:kazi@example.com" className="text-primary hover:underline">kazi@example.com</a>
            </p>
            <p>
              **Office:** Building A, Room 305, Electrical Engineering Dept.
            </p>
            <p>
              **Phone:** +880 1XXXXXXXXX
            </p>
          </div>
          
          {/* Location / Map Placeholder */}
          <h3 className="text-xl font-bold text-gray-800 mb-3">Lab Address</h3>
          <p className="text-gray-700 mb-4">
            Electrical and Electronic Engineering Department
            <br />
            [University Name], [City, Country]
          </p>
          
          <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-sm italic border">
            [Map Embed Placeholder]
          </div>
        </div>
        
        
        {/* Column 2: Contact Form */}
        <div className="p-8 bg-gray-50 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          
          {/* The Form (Action must be set up on the backend later) */}
          <form className="space-y-4" action="#" method="POST"> 
            
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition duration-150"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition duration-150"
                placeholder="you@example.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition duration-150"
                placeholder="e.g., Collaboration Inquiry"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition duration-150"
                placeholder="Write your detailed message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark font-bold py-3 px-4 rounded-md transition duration-300 shadow-lg mt-4"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </Container>
  );
};

export default ContactPage;