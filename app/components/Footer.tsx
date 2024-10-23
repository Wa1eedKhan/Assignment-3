

export default function Footer() {
    return (
      <footer className="py-6 bg-blue-700 text-white shadow-lg">
        <div className="container mx-auto text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Waleed Khan. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/waleedkhan-/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8 hover:opacity-80
                  transition duration-200" />
            </a>
            <a href="https://github.com/Wa1eedKhan" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg" alt="GitHub" className="w-8 h-8 hover:opacity-80 
                  transition duration-200" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  
