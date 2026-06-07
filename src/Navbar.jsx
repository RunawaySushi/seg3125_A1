import Menu from './menu';
import './Navbar.css';

const MENU_ITEMS = [
  { label: 'Service Site', url: 'raymondtan-servicesite.netlify.app}'},
  { label: 'Coming soon 2' },
  { label: 'Coming soon 3' },
  { label: 'Coming soon 4' },
];

export default function Navbar({ scrollToSection }) {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <button
          className="nav-link"
          onClick={() => scrollToSection('about')}
        >
          About me
        </button>

        <button
          className="nav-link"
          onClick={() => scrollToSection('workflow')}
        >
          Workflow
        </button>
      </div>

      <Menu menuItems={MENU_ITEMS} />
    </nav>
  );
}