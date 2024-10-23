import Link from 'next/link';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-teal-400 to-blue-600 text-center text-white">
      <div className="Container mx-auto ">
        <h2 className="text-black text-4xl font-semibold mb-8">About</h2>

        <p className="text-black mb-6">
        Hi, I’m <strong className="text-black">Waleed Khan</strong>, a passionate front-end developer with expertise in HTML, CSS, JavaScript, and TypeScript.
         I specialize in creating modern, responsive designs using Tailwind CSS and am continuously advancing my skills in Next.js and React to build 
         high-performance web applications.
        </p>

        <Link href="#projects">
      <button className="px-8 py-3 bg-blue-300 text-black text-lg rounded-lg shadow-md hover:bg-blue-200 transition duration-300 transform hover:scale-105">
            View My Work
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;


  
