import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../styles/dashboard.css';

const SideBar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [isSidebarHidden, setIsSidebarHidden] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarHidden(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuItems = [
    {
      icon: 'bx bxs-dashboard',
      text: 'Dashboard',
      to: '/dashboard', // Add a 'to' property for the Link component
    },
    {
      icon: 'bx bxs-shopping-bag-alt',
      text: 'My Projects',
      to: '/dashboard/myProjects',
    },
    {
      icon: 'bx bxs-doughnut-chart',
      text: 'Analytics',
      to: '/dashboard/analytics',
    },
    {
      icon: 'bx bxs-message-dots',
      text: 'Message',
      to: '/dashboard/messages',
    },
    {
      icon: 'bx bxs-group',
      text: 'Team',
      to: '/dashboard/team',
    },
  ];

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  const handleSidebarToggle = () => {
    setIsSidebarHidden(!isSidebarHidden);
    console.log('Toggled: isSidebarHidden =', isSidebarHidden);
  };

  return (
    <section id="sidebar" className={isSidebarHidden ? 'hide' : ''}>
      <i className='bx bx-menu' onClick={handleSidebarToggle}></i>
      <Link to="/" className="brand"> {/* Use Link instead of anchor tag */}
        <i className='bx bxs-smile'></i>
        <span className="text">Bug Buddy</span>
      </Link>
      <ul className="side-menu top">
        {menuItems.map((item, index) => (
          <li key={index} className={index === activeMenuItem ? 'active' : ''}>
            <Link to={item.to} onClick={() => handleMenuItemClick(index)}> {/* Use Link instead of anchor tag */}
              <i className={item.icon}></i>
              <span className="text">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="side-menu">
        <li>
          <Link to="/dashboard/settings"> {/* Use Link instead of anchor tag */}
            <i className='bx bxs-cog'></i>
            <span className="text">Settings</span>
          </Link>
        </li>
        <li>
          <Link to="/logout" className="logout"> {/* Use Link instead of anchor tag */}
            <i className='bx bxs-log-out-circle'></i>
            <span className="text">Logout</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;
