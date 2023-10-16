import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/dashboard.css';
import '../../index.css'

const Layout2 = ({ toggleSidebar }) => {
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [isSidebarHidden, setIsSidebarHidden] = useState(window.innerWidth < 768);
  const [contentClass, setContentClass] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarHidden(window.innerWidth < 768);

      if (window.innerWidth >= 576) {
        setIsSearchFormVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };
  

  const toggleSidebar1 = () => {
    setIsSidebarHidden(!isSidebarHidden);
    setContentClass(isSidebarHidden ? '' : 'hide-sidebar');
  };

  const toggleSearchForm = (e) => {
    e.preventDefault();
    if (window.innerWidth < 576) {
      setIsSearchFormVisible(!isSearchFormVisible);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  const menuItems = [
    { icon: 'bx bxs-dashboard', text: 'Dashboard', to: '/dashboard' },
    { icon: 'bx bxs-shopping-bag-alt', text: 'My Projects', to: '/dashboard/myProjects' },
    { icon: 'bx bxs-group', text: 'Project Status', to: '/dashboard/team' },
  ];
  const handleMenuClick = () => {
    toggleSidebar();
    toggleSidebar1();
  };

  return (
    <div>
      {/* NAVBAR */}
      <section id="content" className={contentClass} >
        <nav>
          <i className='bx bx-menu' onClick={handleMenuClick}></i>
          <a href="#" className="nav-link">Home</a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button
                type="submit"
                className="search-btn"
                onClick={toggleSearchForm}
              >
                <i className={`bx ${isSearchFormVisible ? 'bx-x' : 'bx-search'}`}></i>
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode" onClick={toggleDarkMode}></label>
          <a href="#" className="notification">
            <i className='bx bxs-bell'></i>
            <span className="num">8</span>
          </a>
          <Link to="/dashboard/profile">
            <i className='bx bxs-cog'></i>
            <span className="text">Profile</span>
          </Link>
        </nav>
      </section>
      {/* NAVBAR */}

      {/* SIDEBAR */}
      <section id="sidebar" className={isSidebarHidden ? 'hide' : ''}>
        <Link to="/" className="brand">
          <i className='bx bxs-smile'></i>
          <span className="text">Bug Buddy</span>
        </Link>
        <ul className="side-menu top">
          {menuItems.map((item, index) => (
            <li key={index} className={index === activeMenuItem ? 'active' : ''}>
              <Link to={item.to} onClick={() => handleMenuItemClick(index)}>
                <i className={item.icon}></i>
                <span className="text">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="side-menu">
          <li>
            <Link to="/dashboard/settings">
              <i className='bx bxs-cog'></i>
              <span className="text">Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/logout" className="logout">
              <i className='bx bxs-log-out-circle'></i>
              <span className="text">Logout</span>
            </Link>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
    </div>
  );
};

export default Layout2;
