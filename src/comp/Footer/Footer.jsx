import "./Footer.css";
import { FaHome } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-sec">
          <ul>
            <li>
              <h3>contact</h3>
            </li>
            <li>
              {" "}
              libero doloremque dolorem architecto. <br />
              Laboriosam sed aliquam repellat ex?{" "}
            </li>
            <li>
              {" "}
              <i>
                <FaHome />
              </i>
              <p>no address</p>
            </li>
            <li>
              {" "}
              <i>
                <MdLocalPhone />
              </i>
              <p>+01022222222</p>
            </li>
            <li>
              <i>
                <MdEmail />
              </i>
              <p>bendarya58@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="footer-sec">
          <ul>
            <li>
              <h3>customer support</h3>
            </li>
            <li>
              <i>
                <IoIosArrowForward />
              </i>
              <p>about us</p>
            </li>
            <li>
              <i>
                <IoIosArrowForward />
              </i>
              <p>privacy policy</p>
            </li>
            <li>
              <i>
                <IoIosArrowForward />
              </i>
              <p>terms & conditions</p>
            </li>
            <li>
              <i>
                <IoIosArrowForward />
              </i>
              <p>product returns</p>
            </li>
          </ul>
        </div>
        <div className="footer-sec">
          <ul>
            <li>
              <h3>quick links</h3>
            </li>
            <li>
              <i>
                <IoIosArrowForward />
              </i>
              <p>product</p>
            </li>
            <li>
              <i>
                <IoIosArrowForward />
              </i>
              <p>profile</p>
            </li>
            <li>
              <i>
                <IoIosArrowForward />
              </i>
              <p>contact</p>
            </li>
            <li>
              <i>
                <IoIosArrowForward />
              </i>
              <p>terms</p>
            </li>
          </ul>
        </div>
        <div className="footer-sec">
          <ul>
            <li>
              {" "}
              <h3>newsletter</h3>
            </li>
            <li>
              {" "}
              <input type="text" placeholder="Enter Your Email" />
            </li>
            <li>
              {" "}
              <button>subscripe</button>
            </li>
            <li>
              {" "}
              <h3>stay conected</h3>
            </li>
            <li>
              <ul className="sochial-links">
                <li>
                  <i>
                    <FaFacebookF />
                  </i>
                </li>
                <li>
                  <i>
                    {" "}
                    <TiSocialTwitter />
                  </i>
                </li>
                <li>
                  <i>
                    <FaLinkedinIn />
                  </i>
                </li>
                <li>
                  <i>
                    <FaYoutube />
                  </i>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          <span>copyright </span> <i>@</i> <b> ahmed bendary. </b>
          <span> all right reserved</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
