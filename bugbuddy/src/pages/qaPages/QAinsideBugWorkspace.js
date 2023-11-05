import React from 'react';
import { useState } from 'react';
import '../../styles/QAstyles/QAinsidebugworkspace.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from "@fortawesome/free-solid-svg-icons";
import QAinsideBugWorkspaceList from '../../components/comQa/QAinsideBugWorkspaceList';
import BugReport from '../../components/comQa/BugReport';

const QAinsideBugWorkspace = () => {
  const [bugReportVisible, setBugReportVisible] = useState(false);

  const toggleBugReport = () => {
    setBugReportVisible(!bugReportVisible);
  };

  return (
    <div className="QA">
      <div className="head-title">
        <div className="left">
          <h1>Parking System</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Bug Workspace</a>
            </li>
            <li><i className='bx bx-chevron-right'></i></li>
            <li>
              <a className="active" href="#">Parking System</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <button>View Members</button>
          <button onClick={toggleBugReport}>
            Report a Bug <FontAwesomeIcon icon={faBug} />
          </button>
        </div>
      </div>

      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Parking System</h3>
          </div>
          <QAinsideBugWorkspaceList />
        </div>
      </div>

      {bugReportVisible && <BugReport />}
    </div>
  );
};

export default QAinsideBugWorkspace;
