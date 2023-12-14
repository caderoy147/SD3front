import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../index.css';

import useAuth from '../../hooks/useAuth';
import CreateTeam from '../../components/comMan/CreateTeam';

import ManBugWorkSpace from '../managerPages/ManBugWorkSpace';
import DevQASpaces from '../devAndQaPages/DevQASpaces';

const BugWorkspace = () => {
  const { status } = useAuth();
  const isManager = status === 'Manager';

  const [isCreateTeamModalOpen, setIsCreateTeamModalOpen] = useState(false);

  const toggleCreateTeamModal = () => {
    setIsCreateTeamModalOpen((prev) => !prev);
  };

  return (
    <div>
      <div class="head-title">
        <div class="left">
          <h1>Bug Workspace</h1>
          <ul class="breadcrumb">
            <li>
              <a href="#">Bug Workspaces</a>
            </li>
            <li>
              <i class='bx bx-chevron-right'></i>
            </li>
            <li>
              <a class="active" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>

        {isManager && (
          <button onClick={toggleCreateTeamModal} class="btn-download">
            <i class='bx bxs-cloud-download'></i>
            <span class="text">Create Project</span>
          </button>
        )}
      </div>

      {isManager ? (
        <ManBugWorkSpace />
      ) : (
        <DevQASpaces />
      )}

      {/* CreateTeam Modal */}
      <Modal
        isOpen={isCreateTeamModalOpen}
        onRequestClose={toggleCreateTeamModal}
        contentLabel="Create Team"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <CreateTeam onClose={toggleCreateTeamModal} />
      </Modal>
    </div>
  );
};

export default BugWorkspace;
