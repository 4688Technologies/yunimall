import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);

    if (isHomePage) {
      // On homepage, scroll to section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages, navigate to homepage with hash
      navigate(`/#${id}`);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Founders', id: 'founders' },
    { name: 'News', id: 'news' },
    { name: 'Impact', id: 'impact' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center focus:outline-none"
            aria-label="Go to homepage"
            onClick={() => isHomePage ? window.scrollTo({ top: 0, behavior: 'smooth' }) : navigate('/')}
          >
            <img
              src={`${import.meta.env.BASE_URL}yunimall-logo.jpg`}
              alt="Yunimall Limited"
              className="h-10 w-auto"
            />
            <span className="ml-3 text-xl font-bold text-blue-900">Yunimall Limited</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-700 hover:text-blue-900 transition-all duration-300 font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://app.yuni-mall.com/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition-colors duration-200"
            >
              Become a Buyer
            </a>
            <a
              href="https://app.yuni-mall.com/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-500 transition-colors duration-200 font-medium"
            >
              Become a Seller
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-md transition-all duration-300 transform hover:translate-x-1"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <a
                  href="https://app.yuni-mall.com/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition-colors duration-200 text-center"
                >
                  Become a Buyer
                </a>
                <a
                  href="https://app.yuni-mall.com/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-500 transition-colors duration-200 font-medium text-center"
                >
                  Become a Seller
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;