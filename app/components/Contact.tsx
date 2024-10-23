
const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-teal-400 to-blue-600 text-center text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-black text-4xl font-semibold mb-4">Contact Us</h2>
        <p className="max-w-2xl mx-auto text-xl text-black mb-12 leading-relaxed">
          Feel free to reach out for any inquiries or collaboration opportunities.
        </p>
        
        <form className="mx-auto max-w-lg">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full px-4 py-3 mb-4 border border-gray-600 rounded bg-gray-800 text-white"
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full px-4 py-3 mb-4 border border-gray-600 rounded bg-gray-800 text-white"
            required 
          />
          <textarea 
            placeholder="Your Message" 
            className="w-full px-4 py-3 mb-4 border border-gray-600 rounded bg-gray-800 text-white"
            rows={5} 
            required 
          ></textarea>
          <button 
            type="submit" 
            className="mt-4 px-4 py-3 bg-blue-300 text-black rounded-lg hover:bg-blue-200 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;