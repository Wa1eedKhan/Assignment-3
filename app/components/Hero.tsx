
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-400 to-blue-600 text-center text-white">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-black">Welcome to My Website</h1>
        <p className="text-lg mb-8 text-black">
          Discover my projects and services that can help you elevate your web presence.
        </p>
        <Link href="#services">
          <button className="px-8 py-3 bg-blue-300 text-black text-lg rounded-lg shadow-md hover:bg-blue-200 transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

  
  