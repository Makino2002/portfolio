import { FaGithub, FaFacebook, FaDiscord } from "react-icons/fa6";
import "./SocialBar.scss";

export default function SocialBar() {
  return (
    <div className="social-bar">
      <div className="line"></div>
      <ul>
        <li><a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><FaGithub /></a></li>
        <li><a href="https://dribbble.com/yourusername" target="_blank" rel="noreferrer"><FaFacebook /></a></li>
        <li><a href="https://figma.com/@yourusername" target="_blank" rel="noreferrer"><FaDiscord /></a></li>
      </ul>
    </div>
  ); 
}
