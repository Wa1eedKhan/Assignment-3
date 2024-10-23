

import Link from 'next/link';

const projectsData = [
  { 
    id: 1, 
    title: 'Resume Builder', 
    description: 'An interactive, user-friendly resume builder with inline editing, real-time preview, and customizable designs.', 
    link: 'https://hackathon-milestone-5-1830wiyu6-waleed0248s-projects.vercel.app' 
  },
  { 
    id: 2, 
    title: 'Countdown Timer App', 
    description: 'A sleek, fully functional countdown timer built with Next.js, offering real-time updates and customizable time settings.', 
    link: 'https://countdown-timer-aqslz8nv9-waleed0248s-projects.vercel.app' 
  },
  { 
    id: 3, 
    title: 'Weather Widget App', 
    description: 'A dynamic weather widget built with Next.js, displaying real-time weather data using API integration.', 
    link: 'https://weather-widgit-app-9yhc-jce62ih8z-waleed0248s-projects.vercel.app' 
  },
  { 
    id: 4, 
    title: 'Birthday Wish App', 
    description: 'A birthday wish app built with Next.js, featuring candles, balloons, and a lively celebration.', 
    link: 'https://birthday-wish-3fp2jq3s5-waleed0248s-projects.vercel.app' 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-teal-400 to-blue-600 text-center text-white">
      <div className="Container mx-auto ">
        <h2 className="text-black text-4xl font-semibold mb-4">My Projects</h2>
        <p className="text-black mb-8">Explore some of my recent work below:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-blue-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105"
            >
              <h3 className="text-black text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-black mb-4">{project.description}</p>
              <a 
                href={project.link} 
                className="inline-block px-6 py-2 bg-blue-200 text-black font-semibold rounded-lg hover:bg-blue-200"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View My Project
              </a>
            </div>
          ))}
        </div>
        
        <Link href="#home"> 
          <button 
            className="mt-8 px-6 py-2 bg-blue-300 text-black font-semibold rounded-lg hover:bg-blue-200 transition duration-200"
          >
            Back to Top
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
