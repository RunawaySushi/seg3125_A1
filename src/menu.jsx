import { useState, useEffect, useRef } from 'react';
import './menu.css';

export default function Menu({ menuItems = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  /*closes when clicking out of the menu*/
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown-wrapper" ref={wrapperRef}>

      <button
        className="hamburger-btn"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        aria-label="Open menu"
      >
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </button>

      {isOpen && (
        <div className="dropdown-menu" role="menu">
          {menuItems.map((item, i) => (
            <button
              key={i}
              className="dropdown-item"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

    </div>
  );
}