import React from 'react';

import '../styles/notif.css';




const Notifications = ({ notifications }) => {

  const catImage= "../images/cat.png"

  return (
    <div className="notification-container">
      {notifications.map((notification, index) => (
        <div className="containerNotif" key={index}>
          <div className="notif">
            <img id="profile" src={catImage} alt="Profile" />
            <div className="description">
              <h1>{notification.name}</h1>
              <p>{notification.action}</p>
            </div>
            <h2>{notification.time}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
