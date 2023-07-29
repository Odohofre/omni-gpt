import { useState, useEffect, useRef } from 'react';
import open from '../assets/hamburger.svg';
import close from '../assets/close.svg';

export default function MobileNavBar() {
  const [isOpen, setOpen] = useState(false);

  const menuRef = useRef();

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="block md:hidden">
        <button
          className={`flex items-center absolute  transition-all duration-500  ${
            isOpen ? 'right-[21px] top-5 rotate-180' : 'top-4 right-[22px]'
          }  z-50 `}
          onClick={handleClick}
        >
          <img src={isOpen ? close : open} alt="Hamburger Menu" ref={menuRef} />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0  transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : ' translate-x-full'
        } bg-background/70 h-3/4 w-screen  z-40`}
      >
        <div className="flex flex-col items-center mt-40 space-y-10 text-3xl/[63px] font-sansMedium">
          <a href="#" onClick={handleClick}>
            Blog
          </a>
          <a href="#" onClick={handleClick}>
            Contact Us
          </a>
          <a href="#" onClick={handleClick}>
            Sign In
          </a>
        </div>
      </div>
    </>
  );
}
