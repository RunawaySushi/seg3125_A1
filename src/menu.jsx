import { useState, useEffect, useRef } from 'react';
import './menu.css';

export default function Menu({ menuItems = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleItemClick(item) {
    if (item.url) {
      window.open(item.url, '_blank');
    }
    setIsOpen(false);
  }

  return (
    <div className="dropdown-wrapper" ref={wrapperRef}>

      <button
        className="projects-btn"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        aria-label="Open menu"
      >
        Projects
      </button>

      {isOpen && (
        <div className="dropdown-menu" role="menu">
          {menuItems.map((item, i) => (
            <button
              key={i}
              className="dropdown-item"
              role="menuitem"
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

    </div>
  );
}