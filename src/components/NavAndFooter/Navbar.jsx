import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import navItems from '../data/navItems';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="relative z-50 border-b border-gray-200 bg-white px-5 py-5 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="shrink-0">
          <img
            src="/logo.png.png"
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(item => (
            <div key={item.label} className="group relative">
              {!item.links ? (
                <Link
                  to={item.path}
                  className="block px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:text-slate-400"
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:text-slate-400"
                  >
                    {item.label}
                    <ChevronDown
                      size={15}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>

                  <div className="invisible absolute left-0 top-full min-w-44 translate-y-2 rounded-md border border-gray-100 bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.links.map(link => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-slate-400"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute left-0 top-full max-h-[80vh] w-full overflow-y-auto border-t border-gray-100 bg-white px-5 py-4 shadow-lg lg:hidden">
          {navItems.map(item => (
            <div key={item.label} className="border-b border-gray-100">
              {!item.links ? (
                <Link
                  to={item.path}
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveDropdown(null);
                  }}
                  className="block py-4 text-sm font-medium text-gray-700 transition-colors hover:text-slate-400"
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label,
                      )
                    }
                    className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-gray-700 hover:text-slate-400"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {activeDropdown === item.label && (
                    <div className="pb-3 pl-4">
                      {item.links.map(link => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => {
                            setMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="block py-2.5 text-sm text-gray-600 transition-colors hover:text-slate-400"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
