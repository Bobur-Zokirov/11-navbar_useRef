import { useEffect, useRef, useState } from "react";
import { links, social } from "../constants/data";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <nav className="nav-center">
      <div className="nav-header">
        <img
          src="https://raw.githubusercontent.com/john-smilga/react-projects/master/11-navbar/final/src/logo.svg"
          alt="logo"
        />
        <button
          className="nav-toggle"
          onClick={() => setShowLinks((prev) => !prev)}
        >
          <FaBars size={20} />
        </button>
      </div>

      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
