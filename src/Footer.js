import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <i className="icon-up-open"></i>
        </a>
      </div>
      <div className="footer__info">
        <h2>AMAZON</h2>
      </div>
      {/* <hr /> */}

      <div className="footer__copyright">
        <p>&copy;amazon 2020 copyright all right reserved</p>
      </div>
    </div>
  );
}

export default Footer;
