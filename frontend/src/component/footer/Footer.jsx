import { FaGithub, FaFacebook, FaDiscord } from "react-icons/fa6";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="logo">⌘</div> {/* có thể thay bằng hình ảnh logo */}
        <div className="info">
          <h2>NMM Portfolio</h2>
          <p>Web designer and front-end developer</p>
        </div>
      </div>

      <div className="footer-right">
        <h3>Media</h3>
        <ul className="socials">
          <li>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://facebook.com/yourusername" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/yourinvite" target="_blank" rel="noreferrer">
              <FaDiscord />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
