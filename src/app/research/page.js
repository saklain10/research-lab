// app/research/page.js
import Container from '../../../components/Container';

export const metadata = {
  title: 'Research Activities | EE Research Lab',
  description: 'Explore our active research projects on EV Charging Networks, Battery Degradation, and Renewable Energy Smart Grids.',
};


const researchFields = [
  "EV Charging Network Optimization",
  "EV Charging Scheduling",
  "Battery Degradation Modeling and Mitigation",
  "Renewable Energy Integration with Grid",
  "EV Smart Grid Interaction",
];

const featuredProjects = [
    { 
        title: "Intelligent EV Charging Scheduling for Grid Stability", 
        description: "Developing dynamic scheduling algorithms for large-scale EV charging networks to minimize grid stress and optimize energy costs.",
        keywords: ["EV Charging Scheduling", "EV Smart Grid", "Optimization"]
    },
    { 
        title: "Mitigating Battery Degradation in Fast Charging Environments", 
        description: "Investigating the effects of fast charging on Li-ion battery longevity and developing smart charging protocols to extend battery life.",
        keywords: ["Battery Degradation", "EV Charging Network", "Power Electronics"]
    },
    { 
        title: "Seamless Renewable Energy Integration using Battery Storage", 
        description: "Designing advanced control systems for Battery Energy Storage Systems (BESS) to facilitate high penetration of solar and wind energy into the existing grid.",
        keywords: ["Renewable Energy Integration", "Battery Degradation", "Smart Grid"]
    },
];


const ResearchPage = () => {
  return (
    <Container>
      <h1 className="text-5xl font-extrabold text-primary mb-6 border-b pb-4">
        🔬 Research Focus Areas
      </h1>
      <p className="text-xl text-gray-700 mb-12">
        Our research is dedicated to the advancement of sustainable and resilient electrical energy systems, primarily focusing on the convergence of electric vehicles, energy storage, and smart grids.
      </p>

      {/* Core Focus Areas List */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-primary pl-4">
          Core Research Pillars
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {researchFields.map((field, index) => (
            <div key={index} className="p-5 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-2 border-primary">
              <p className="text-lg font-semibold text-gray-900">{field}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-primary pl-4">
          Featured Projects
        </h2>
        
        <div className="space-y-8">
            {featuredProjects.map((project, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                        {project.keywords.map((keyword, kIndex) => (
                            <span key={kIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </section>


      <div className="mt-12 text-center">
        <a href="/publications" className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-dark transition duration-300">
          View Our Publications
        </a>
      </div>
    </Container>
  );
};

export default ResearchPage;