// import { useEffect, useState } from "react";
// import "./Header.scss";

// const NAVS = [
//   { href: "#home", label: "home" },
//   { href: "#projects", label: "project" },
//   { href: "#about-me", label: "about-me" },
//   { href: "#contact", label: "contact" },
// ];

// export default function Header() {
//   const [activeHash, setActiveHash] = useState(window.location.hash || "#home");

//   useEffect(() => {
//     // cập nhật khi người dùng đổi hash (click link hoặc back/forward)
//     const onHashChange = () => setActiveHash(window.location.hash || "#home");
//     window.addEventListener("hashchange", onHashChange);
//     return () => window.removeEventListener("hashchange", onHashChange);
//   }, []);

//   return (
//     <header className="header">
//       <div className="logo"><span>NMM</span>yPortfolio</div>

//       <nav className="nav">
//         <ul>
//           {NAVS.map(item => (
//             <li key={item.href}>
//               <a
//                 href={item.href}
//                 className={activeHash === item.href ? "active" : ""}
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }
// Header.jsx
import { useState, useEffect } from "react";
import "./Header.scss";

export default function Header() {
  const [active, setActive] = useState(window.location.hash || "#home");

  useEffect(() => {
    const handler = () => setActive(window.location.hash || "#home");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  return (
    <header className="header">
      <div className="logo"><span>NMM</span> Portfolio</div>

      <nav className="nav">
        <ul>
          <li><a href="#home" className={active==="#home" ? "active" : ""}>home</a></li>
          <li><a href="#projects" className={active==="#projects" ? "active" : ""}>projects</a></li>
          <li><a href="#about-me" className={active==="#about-me" ? "active" : ""}>about-me</a></li>
          <li><a href="#contact" className={active==="#contact" ? "active" : ""}>contact</a></li>
        </ul>
      </nav>

      <div className="controls">
        <a className="lang" href="?lang=en" aria-label="Switch to English">EN</a>
        <a className="cv" href="/cv.pdf" download>Download&nbsp;CV</a>
      </div>
    </header>
  );
}
