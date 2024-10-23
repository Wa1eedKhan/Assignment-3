import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-6 bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <img 
            src="/unnamed.jpg" 
            alt="Logo" 
            className="h-8 w-auto" 
          />
        </div>

        <nav className="flex space-x-6 mx-auto">
          <Link href="#home">
            <span className="text-lg text-black hover:text-white transition-colors duration-300">Home</span>
          </Link>
          <Link href="#about">
            <span className="text-lg text-black hover:text-white transition-colors duration-300">About</span>
          </Link>
          <Link href="#services">
            <span className="text-lg text-black hover:text-white transition-colors duration-300">Services</span>
          </Link>
          <Link href="#projects">
            <span className="text-lg text-black hover:text-white transition-colors duration-300">Projects</span>
          </Link>
          <Link href="#contact">
            <span className="text-lg text-black hover:text-white transition-colors duration-300">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

