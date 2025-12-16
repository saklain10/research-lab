// components/LandingPageContent.jsx

// আপনার দেওয়া পাথ অনুসারে Container ইম্পোর্ট করা হলো:
import Container from './Container';
import Link from 'next/link';

// আপনার গবেষণার ক্ষেত্রগুলো
const researchFields = [
    { name: "EV Charging Network Optimization", icon: "⚡" },
    { name: "Battery Degradation Modeling", icon: "🔋" },
    { name: "Renewable Energy Integration", icon: "☀️" },
    { name: "EV Smart Grid Interaction", icon: "🌐" },
];

const teamMembers = [
    { name: "Prof. Dr. Kazi", role: "Principal Investigator", image: "https://i.ibb.co/5xkFY4v2/1.jpg" }, 
    { name: "Rahim Ahmed", role: "Ph.D. Student", image: "https://i.ibb.co/5xkFY4v2/1.jpg" },
    { name: "Fahim Khan", role: "Research Assistant", image: "https://i.ibb.co/5xkFY4v2/1.jpg" },
];

const LandingPageContent = () => {
    return (
        <>
            <Container>
                {/* 1. Welcome & Mission Section */}
                <section className="py-16 text-center" data-aos="fade-up">
                    <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                        Welcome to the Energy Innovation Laboratory
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-10">
                        Dedicated to pioneering research in **Electrical and Renewable Energy Engineering**. We are shaping the future of sustainable and smart power systems.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-8 text-left mt-10">
                        <div className="p-6 border-t-4 border-primary shadow-xl rounded-lg bg-white transform hover:shadow-2xl transition duration-300">
                            <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
                            <p className="text-gray-700">To generate high-impact, actionable research that solves real-world challenges in renewable energy integration and EV smart infrastructure.</p>
                        </div>
                        <div className="p-6 border-t-4 border-primary shadow-xl rounded-lg bg-white transform hover:shadow-2xl transition duration-300">
                            <h3 className="text-2xl font-bold text-primary mb-3">Our Vision</h3>
                            <p className="text-gray-700">To be a globally recognized center for innovation in power electronics, battery storage, and smart grid technology.</p>
                        </div>
                        <div className="p-6 border-t-4 border-primary shadow-xl rounded-lg bg-white transform hover:shadow-2xl transition duration-300">
                            <h3 className="text-2xl font-bold text-primary mb-3">Core Values</h3>
                            <p className="text-gray-700">Innovation, Sustainability, Collaboration, and Rigorous Scientific Inquiry.</p>
                        </div>
                    </div>
                </section>

                {/* 2. Core Research Pillars Section (Based on your fields) */}
                <section className="py-16 bg-gray-50 rounded-xl shadow-inner" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                        Our Core Research Pillars
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {researchFields.map((field, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg border-b-2 border-primary transition-all duration-300 hover:bg-green-50"
                                data-aos="zoom-in" 
                                data-aos-delay={index * 100 + 300}
                            >
                                <span className="text-5xl mb-4" role="img" aria-label={field.name}>
                                    {field.icon}
                                </span>
                                <h3 className="text-xl font-bold text-gray-800">{field.name}</h3>
                                <Link href="/research" className="text-primary mt-2 text-sm font-semibold hover:underline">
                                    Learn More →
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link href="/research" className="bg-primary font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-dark transition duration-300">
                            View All Research Projects
                        </Link>
                    </div>
                </section>
                
                {/* 3. Impact & Achievements Section */}
                <section className="py-16" data-aos="fade-up">
                    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                        Impact and Achievements
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Achievement Card 1: Publications */}
                        <div className="bg-primary p-8 rounded-xl shadow-2xl text-white text-center transform hover:scale-105 transition duration-300">
                            <p className="text-5xl font-bold mb-2 text-gray-800">35+</p>
                            <p className="text-xl font-medium text-gray-800">Top-Tier Publications</p>
                        </div>
                        {/* Achievement Card 2: Projects */}
                        <div className="bg-green-800 p-8 rounded-xl shadow-2xl text-white text-center transform hover:scale-105 transition duration-300">
                            <p className="text-5xl font-bold mb-2">5</p>
                            <p className="text-xl font-medium">Funded Research Projects</p>
                        </div>
                        {/* Achievement Card 3: Researchers */}
                        <div className="bg-primary p-8 rounded-xl shadow-2xl text-white text-center transform hover:scale-105 transition duration-300">
                            <p className="text-5xl font-bold mb-2 text-gray-800">15</p>
                            <p className="text-xl font-medium text-gray-800">Trained Researchers</p>
                        </div>
                    </div>
                </section>

                {/* 4. Featured Members Section */}
                <section className="py-16 bg-white" data-aos="fade-up">
                    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                        Meet Our Featured Researchers
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-primary">
                                    {/* Note: In a real app, use Next/Image for optimization */}
                                    <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                                <p className="text-primary font-medium mb-3">{member.role}</p>
                                <Link href="/members" className="text-gray-600 text-sm hover:text-primary transition duration-300">
                                    View Profile
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
                
            </Container>
            
            {/* 5. Quick Contact Call to Action (Full Width - Outside Container) */}
            <section className="bg-primary py-16 mt-12" data-aos="zoom-in">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-extrabold mb-4">
                        Collaborate with Us
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Have a research inquiry or interested in joining our team? Get in touch today.
                    </p>
                    <Link href="/contact" className="text-primary font-bold py-3 px-10 rounded-full shadow-xl hover:bg-gray-200 transition duration-300 transform hover:scale-105">
                        Contact Our Lab
                    </Link>
                </div>
            </section>
        </>
    );
};

export default LandingPageContent;