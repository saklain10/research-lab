// app/opportunities/page.js
import Container from '../../../components/Container';

export const metadata = {
  title: 'Opportunities | Energy Innovation Laboratory',
  description: 'Find openings for PhD, MSc, Research Assistant positions, and internships.',
};

const OpportunitiesPage = () => {
  return (
    <Container>
      <h1 className="text-5xl font-extrabold text-primary mb-6 border-b pb-4">
        🌟 Research Opportunities
      </h1>
      <p className="text-xl text-gray-700 mb-10">
        We are always looking for motivated and talented students and researchers to join our team.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-green-50 rounded-lg border border-primary-light shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">PhD & M.Sc. Positions</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Seeking candidates with strong backgrounds in Power Systems, Control, or Power Electronics.</li>
            <li>Current open topics include AI in Grids and Wide-Bandgap Converters.</li>
            <li>**Next application deadline:** October 30th.</li>
          </ul>
        </div>
        
        <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-300 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Internships & Research Assistants</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Undergraduate/Graduate internships available year-round.</li>
            <li>Hands-on experience with lab equipment and simulations (MATLAB/Simulink).</li>
            <li>Contact us directly with your CV and statement of interest.</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-gray-100 rounded-lg text-center">
        <p className="text-lg text-gray-800">For specific project details, please contact the PI, Prof. Dr. Kazi, via the Contact page.</p>
      </div>
    </Container>
  );
};

export default OpportunitiesPage;