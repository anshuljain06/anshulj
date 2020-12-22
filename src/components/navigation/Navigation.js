import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi"
import "./Navigation.scss"

function Navigation(props) {
  return (
    <div className="Navigation">
      <div className="container-lg Navigation-Container">
        <nav className="navbar navbar-expand-lg Navigation-Navbar">
          <Link className="navbar-brand Navigation-Brand" to="/">anshul jain</Link>
          <button className="navbar-toggler Navigation-Toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <FiMenu className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav Navigation-NavButtons">
              <Link className={"nav-item nav-link Navigation-NavButton" + (props.page === "AboutPage" ? " active Navigation-Active" : "")} to="/">&lt;about&gt;</Link>
              <Link className={"nav-item nav-link Navigation-NavButton" + (props.page === "LastPage" ? " active Navigation-Active" : "")} to="/last_page">&lt;last page&gt;</Link>
              <Link className={"nav-item nav-link Navigation-NavButton" + (props.page === "MyCVPage" ? " active Navigation-Active" : "")} to="/my_cv">&lt;my cv&gt;</Link>
              <Link className={"nav-item nav-link Navigation-NavButton" + (props.page === "ContactPage" ? " active Navigation-Active" : "")} to="/contact">&lt;contact&gt;</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;