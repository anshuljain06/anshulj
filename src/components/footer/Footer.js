import { FiMail, FiGithub, FiTwitter, FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi"
import "./Footer.scss"

function Footer(props) {
  return (
    <div className="Footer">
      <footer>
        <div className="container-lg Footer-Container">
          <div className="row">
            <div className="col-lg-4 center">
              <span className="">Copyright &copy; Anshul Jain 2020</span>
            </div>
            <div className="col-lg-4 Footer-Empty">&nbsp;</div>
            <div className="col-lg-4 center">
              <a href="mailto:anshul@anshulj.dev?subject=Hello, from your website" rel="noreferrer" target="_blank">
                <FiMail size="22" />
              </a>
              <a href="https://github.com/anshuljain06" rel="noreferrer" target="_blank">
                <FiGithub size="20" />
              </a>
              <a href="https://twitter.com/anshuljain06" rel="noreferrer" target="_blank">
                <FiTwitter size="20" />
              </a>
              <a href="https://www.linkedin.com/in/anshuljain06" rel="noreferrer" target="_blank">
                <FiLinkedin size="20" />
              </a>
              <a href="https://www.facebook.com/anshul.jain06/" rel="noreferrer" target="_blank">
                <FiFacebook size="20" />
              </a>
              <a href="https://www.instagram.com/anshuljain06/" rel="noreferrer" target="_blank">
                <FiInstagram size="20" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>    
  );
}

export default Footer