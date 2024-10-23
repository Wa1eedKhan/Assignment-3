

import Link from 'next/link';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-r from-teal-400 to-blue-600 text-center text-white">
      <div className="Container mx-auto ">
        <h2 className="text-black text-4xl font-semibold mb-8">My Services</h2>
        <p className="max-w-2xl mx-auto text-xl text-black mb-12 leading-relaxed">
          I offer a range of services to help you build, design, and enhance your web presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service 1 */}
          <div className="p-6 rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white">
            <h3 className="text-black text-2xl font-semibold mb-4">Responsive Web Design</h3>
            <p className='text-black'>
              Creating responsive websites that look great on any device, ensuring the best user experience.
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-6 rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white">
            <h3 className="text-black text-2xl font-semibold mb-4">Web Development</h3>
            <p className='text-black'>
              Building high-performance websites with modern JavaScript frameworks like React and Next.js.
            </p>
          </div>

          {/* Service 3 */}
          <div className="p-6 rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white">
            <h3 className="text-black text-2xl font-semibold mb-4">UI/UX Design</h3>
            <p className='text-black'>
              Designing visually appealing and intuitive user interfaces for a better user experience.
            </p>
          </div>

          {/* Service 4 */}
          <div className="p-6 rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white">
            <h3 className="text-black text-2xl font-semibold mb-4">Tailwind CSS Integration</h3>
            <p className='text-black'>
              Utilizing Tailwind CSS for clean, modern, and responsive designs with minimal code.
            </p>
          </div>

          {/* Service 5 */}
          <div className="p-6 rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white">
            <h3 className="text-black text-2xl font-semibold mb-4">Performance Optimization</h3>
            <p className='text-black'>
              Ensuring your web applications load quickly and run smoothly, optimizing for performance.
            </p>
          </div>

          {/* Service 6 */}
          <div className="p-6 rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white">
            <h3 className="text-black text-2xl font-semibold mb-4">SEO Friendly Websites</h3>
            <p className='text-black'>
              Developing websites with SEO best practices to help your site rank higher in search engine results.
            </p>
          </div>
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

export default Services;
