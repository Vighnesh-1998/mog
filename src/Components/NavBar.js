import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMdDownload } from 'react-icons/io';


function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const [skillsDropdownVisible, setSkillsDropdownVisible] = useState(false);
  const [projectsDropdownVisible, setProjectsDropdownVisible] = useState(false);

  const toggleSkillsDropdown = () => {
    setSkillsDropdownVisible(!skillsDropdownVisible);
    setProjectsDropdownVisible(false);
    setActiveLink('skills');
  };

  const toggleProjectsDropdown = () => {
    setProjectsDropdownVisible(!projectsDropdownVisible);
    setSkillsDropdownVisible(false);
    setActiveLink('projects');
  };

  const dropdownStyle = {
    position: 'absolute',
    backgroundColor: '#fff',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: '1',
    top: '100%',
    transition: 'display 0.3s ease',
  };

  const dropdownContentStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const dropdownLinkStyle = {
    padding: '12px 16px',
    textDecoration: 'none',
    color: '#000',
    borderBottom: '1px solid #ddd',
    cursor: 'pointer',
  };

  const navbarStyle = {
    backgroundColor: scrolled ? '#fff' : 'transparent',
    transition: 'background-color 0.3s ease-in-out',
    padding: '10px 0',
    borderBottom: scrolled ? '1px solid #ddd' : 'none',
  };

  return (
    <div style={{ ...navbarStyle, position: 'relative', backgroundColor: 'black' }}>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <Link to='/'>
            <a href="#home" style={{ marginRight: '20px', color: '#fff', textDecoration: 'none' }} onClick={() => onUpdateActiveLink('home')}>
              Home
            </a>
            </Link>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ ...dropdownLinkStyle, cursor: 'pointer', color: 'white' }} onClick={toggleSkillsDropdown}>
                Skills
              </span>
              {skillsDropdownVisible && (
                <div style={{ ...dropdownStyle, display: 'block' }}>
                  <div style={dropdownContentStyle}>
                    <span style={dropdownLinkStyle}>React.js</span>
                    <span style={dropdownLinkStyle}>JavaScript</span>
                    <span style={dropdownLinkStyle}>CSS</span>
                    <span style={dropdownLinkStyle}>MongoDB</span>
                    <span style={dropdownLinkStyle}>SQL</span>
                    <span style={{ ...dropdownLinkStyle, borderBottom: 'none' }}>HTML</span>
                  </div>
                </div>
              )}
            </div>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ ...dropdownLinkStyle, cursor: 'pointer', color: 'white' }} onClick={toggleProjectsDropdown}>
                Projects
              </span>
              {projectsDropdownVisible && (
                <Link to='/projects'>
                  <div style={{ ...dropdownStyle, display: 'block' }}>
                  <div style={dropdownContentStyle}>
                    <span style={{ ...dropdownLinkStyle, borderBottom: 'none' }}>Click here to know more</span>
                  </div>
                </div>
                </Link>
              )}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', marginRight: '20px' }}>
              <a href="https://www.linkedin.com/in/vighnesh-sunil-232860225/" style={{ marginRight: '10px', color: '#fff', textDecoration: 'none' }}>
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/viggi_vighnesh/" style={{ color: '#fff', textDecoration: 'none' }}>
                <FaInstagram />
              </a>
            </div>
            <Link to='/contact'>
              <button
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                padding: '8px 16px',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
              onClick={() => {console.log("connect")}}
            >
              
              <span>Let's Connect</span>
            </button>
            </Link>
            <button  id='hoover' style={{backgroundColor: 'white', marginLeft: '30px', padding: '8px', border: '2px solid black', borderRadius: '5px'}}>
            
            <a
    //  className="button"
     href="../Components/Vighnesh_S09_23.pdf"
     download
     >
    <IoMdDownload />
  </a>
            </button>
           


          </div>
              
              
              
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
