import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../styles/QAstyles/AcceptOrDeny.css';
import QAdenyform from '../../components/comQa/QAdenyform';

// Ensure the modal is accessible to screen readers
Modal.setAppElement('#root');

const QAacceptOrDeny = () => {
  const [isDenyFormVisible, setIsDenyFormVisible] = useState(false);

  const handleDenyClick = () => {
    setIsDenyFormVisible(true);
  };

  const handleCloseDenyForm = () => {
    setIsDenyFormVisible(false);
  };

  return (
    <div>
      <div className="head-title">
        <div className="left">
          <h1>Null Exception</h1>
          <ul className="breadcrumb">
            <li>
                <a href="#">Bug Status</a>
              </li>
              <li><i className='bx bx-chevron-right' ></i></li>
              <li>
                <a href="#">Parking System</a>
              </li>
              <li><i className='bx bx-chevron-right' ></i></li>
              <li><a className="active" href="#">Null Exception</a></li>
          </ul>
        </div>
      </div>

      <div className="table-data">
        <div className="order">
          <table>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Progress</th>
                  <th>Proof</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Rafael D. Sanchez</p>
                  </td>
                  <td>Developer</td>
                  <td>Finished</td>
                  <td><a href="#"><span className="status completed">View</span></a></td>
                </tr>
              </tbody>
          </table>
          <div className="button-container">
            <button className="blue-button">Accept</button>
            <button className="red-button" onClick={handleDenyClick}>
              Deny
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Deny Form */}
      <Modal
        isOpen={isDenyFormVisible}
        onRequestClose={handleCloseDenyForm}
        contentLabel="Deny Form"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <QAdenyform onClose={handleCloseDenyForm} />
      </Modal>
    </div>
  );
};

export default QAacceptOrDeny;
