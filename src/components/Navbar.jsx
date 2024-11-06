import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur">
    <ul className="navbar-list">

      {/* <li className="navbar-item">
        <NavLink to="/resume" className="navbar-link" data-nav-link>
          Resume
        </NavLink>
      </li> */}

      <li className="navbar-item">
        <NavLink to="/" className="navbar-link" data-nav-link>
          Projects
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/about" className="navbar-link" data-nav-link>
          About
        </NavLink>
      </li>

      {/* <li className="navbar-item">
        <NavLink to="/blogs" className="navbar-link" data-nav-link>
          Blog
        </NavLink>
      </li> */}

      <li className="navbar-item">
        <NavLink to="/contact" className="navbar-link" data-nav-link>
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar