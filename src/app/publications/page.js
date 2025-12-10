// app/publications/page.js
import Container from '../../../components/Container';

export const metadata = {
  title: 'Publications | EE Research Lab',
  description: 'List of all academic publications, including journal articles, conference papers, and theses.',
};

const PublicationsPage = () => {
  const dummyPublications = [
    { title: "Real-Time Optimization of Solar PV Arrays using RL", journal: "IEEE Transactions on Power Systems", year: 2024 },
    { title: "Stability Analysis of Islanded Microgrids", journal: "Electric Power Systems Research", year: 2023 },
    { title: "Design of SiC-based Bidirectional DC-DC Converter", journal: "Applied Power Electronics Conference (APEC)", year: 2023 },
  ];

  return (
    <Container>
      <h1 className="text-5xl font-extrabold text-primary mb-6 border-b pb-4">
        📚 Publications
      </h1>
      <p className="text-xl text-gray-700 mb-10">
        Our high-impact research is regularly published in leading international journals and conferences.
      </p>

      <div className="space-y-6">
        {dummyPublications.map((pub, index) => (
          <div key={index} className="p-4 border-l-4 border-primary bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-gray-800">{pub.title}</h3>
            <p className="text-sm text-gray-600 italic">
              {pub.journal}, {pub.year}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-gray-500">More publications coming soon...</p>
      </div>
    </Container>
  );
};

export default PublicationsPage;