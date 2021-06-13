import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faSkype,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="footer">
      <div className="link-container">
        <div className="footer-nav">
          <ul>
            <li>
              <a href="\blog">Blog</a>
            </li>
            <li>
              <a href="\FAQs">FAQs</a>
            </li>
            <li>
              <a href="\Contactus">Contact us</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <ul>
            <li>
              <a href="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="Skype">
                <FontAwesomeIcon icon={faSkype} />
              </a>
            </li>
            <li>
              <a href="Pinterest">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">©2018 All Rights Reserverd.</div>
    </div>
  );
}
