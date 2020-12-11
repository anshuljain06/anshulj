import { Link } from 'react-router-dom';
import "./Navigation.scss"

function Navigation(props) {
  return (
    <div className="Navigation center">
      <nav>
        <div>
          <Link to='/'>&lt;about&gt;</Link>
          <Link to='/last_page'>&lt;last page&gt;</Link>
          <Link to='/my_cv'>&lt;my cv&gt;</Link>
          <Link to='/contact'>&lt;contact&gt;</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;