/* eslint-disable react/no-unescaped-entities */
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
    <div className="container-fluid">
      <a className="navbar-brand" href="#home">Jackson's Pizza</a>
      <button className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cart">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
