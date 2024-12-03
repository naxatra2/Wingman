import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        Nakshatra <span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://www.youtube.com/watch?v=4OrCA1OInoo&list=RDMM4OrCA1OInoo&start_radio=1&ab_channel=SMTOWN">
          <FacebookIcon className="social-link" />
        </a>
        <a href="https://www.youtube.com/watch?v=4OrCA1OInoo&list=RDMM4OrCA1OInoo&start_radio=1&ab_channel=SMTOWN">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://www.youtube.com/watch?v=4OrCA1OInoo&list=RDMM4OrCA1OInoo&start_radio=1&ab_channel=SMTOWN">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.youtube.com/watch?v=4OrCA1OInoo&list=RDMM4OrCA1OInoo&start_radio=1&ab_channel=SMTOWN">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;