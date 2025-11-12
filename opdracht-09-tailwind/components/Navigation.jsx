import { Link, Outlet, useLocation } from 'react-router-dom';
import "../App.css";

const Navigation = () => {
  const location = useLocation();



  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Discover">Discover</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
