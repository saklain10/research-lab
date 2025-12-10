// app/members/page.js
import Container from '../../../components/Container';
import Image from 'next/image';
import { members } from '../../../data/members';

const MembersPage = () => {
  return (
    <Container>
      <h1 className="text-5xl font-extrabold text-gray-800 mb-10 border-b pb-4 text-center">
        Our Esteemed Research Team
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transform hover:scale-102 transition duration-300">
            <div className="relative w-full h-64">
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="brightness-90 hover:brightness-100 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h2 className="text-3xl font-bold">{member.name}</h2>
                <p className="text-primary-light text-lg font-medium">{member.role}</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">{member.bio}</p>
              <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-800 mb-2">Research Focus:</h3>
                <div className="flex flex-wrap gap-2">
                  {member.research_focus.map((focus, idx) => (
                    <span key={idx} className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <a 
                  href={`mailto:${member.email}`} 
                  className="text-primary hover:text-primary-dark text-sm font-semibold flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 6h.01M3 21h18a2 2 0 002-2V5a2 2 0 00-2-2H3a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin mr-1" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542V13.394h2.401zm-1.2-5.728c.85 0 1.342-.517 1.342-1.226 0-.713-.492-1.229-1.347-1.229-.854 0-1.347.516-1.347 1.229 0 .709.493 1.226 1.342 1.226h.005zm6.578 5.728V9.458c0-.623-.043-.935.093-1.157.135-.22.46-.45.92-.45.654 0 .914.397.914.996V13.394h2.395V9.388c0-2.454-1.39-3.567-3.21-3.567-1.48 0-2.17.84-2.5 1.45.13.25.17.3.17.43v5.694h2.402z"/>
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MembersPage;