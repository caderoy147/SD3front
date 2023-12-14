import React from 'react';
import Notifications from './Notifications';
import sampleNotifications from './notificationsData';

const yourParentComponent = () => {
  return <Notifications notifications={sampleNotifications} />;
};

export default yourParentComponent;
