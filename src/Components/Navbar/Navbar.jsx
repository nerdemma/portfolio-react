import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "services", label: "Services" },
  { id: "mywork", label: "My Work" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [menu, setMenu] = useState("home");


  const contactId = 'contact';


  const handleConnectClick = () => {

    setMenu(contactId);


    const targetElement = document.getElementById(contactId);
    if (targetElement) {

      const offset = 50;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });


      window.history.pushState(null, null, `#${contactId}`);
    }
  };


  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        {navItems.map((item) => (

          <li key={item.id}>
            <AnchorLink
              className={`anchor-link ${menu === item.id ? 'active' : ''}`}
              offset={50}
              href={`#${item.id}`}
              onClick={() => setMenu(item.id)}
              aria-current={menu === item.id ? 'page' : undefined}
            >
              {item.label}
              {menu === item.id && <img src={underline} alt="Sección activa" />}
            </AnchorLink>
          </li>
        ))}
      </ul>


      <div
        className={`nav-connect ${menu === contactId ? 'active' : ''}`}
        onClick={handleConnectClick}
        role="link"
        tabIndex={0}
      >
        Connect with me
      </div>

    </div>
  );
}
export default Navbar