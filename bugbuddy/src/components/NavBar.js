import React, { useState, useEffect } from 'react';
import '../styles/dashboard.css';

const NavBar = () => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarHidden(window.innerWidth < 768);

      // Hide the search form on window resize
      if (window.innerWidth >= 576) {
        setIsSearchFormVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
    console.log('Toggled: isSidebarHidden =', isSidebarHidden);
  };

  const toggleSearchForm = (e) => {
    e.preventDefault();

    // Toggle the search form only on small screens
    if (window.innerWidth < 576) {
      setIsSearchFormVisible(!isSearchFormVisible);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    // Toggle the dark mode class on the body
    document.body.classList.toggle('dark');
  };

  return (
    <section id="content">
      <nav>
        <i className='bx bx-menu' onClick={toggleSidebar}></i>
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
        <a href="#" className="profile">
          <img src="img/pak.png" alt="Profile" />
        </a>
      </nav>
    </section>
  );
};

export default NavBar;
