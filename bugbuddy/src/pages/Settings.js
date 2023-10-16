import React from 'react';
import '../index.css';
import '../styles/settings.css' // Make sure to update the path based on your project structure

const Settings = () => {
  return (
    <div>

                {/* main */}

                    <div className="head-title">
                        <div className="left">
                            <h1>Settings</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="#">Settings</a>
                                </li>
                                <li><i className='bx bx-chevron-right'></i></li>
                                <li>
                                    <a className="active" href="#">Home</a>
                                </li>
                            </ul>
                        </div> 
                    </div>
        
                    <div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Account Settings</h3>
					</div>
					<table>
                <div class="main-user-info">
                    <div class="user-input-box">
                        <label for="fname">First Name</label>
                        <input type="text"
                                id="fname"
                                name="fname"
                                placeholder="Enter First Name"/>
                    </div>
                    <div class="user-input-box">
                        <label for="lname">Last Name</label>
                        <input type="text"
                                id="lname"
                                name="lname"
                                placeholder="Enter Last Name"/>
                    </div>
                    <div class="user-input-box">
                        <label for="company">Company</label>
                        <input type="text"
                                id="company"
                                name="company"
                                placeholder="Enter Company"/>
                    </div>
                    <div class="user-input-box">
                        <label for="mail">Email</label>
                        <input type="text"
                                id="mail"
                                name="mail"
                                placeholder="Enter Email Address"/>
                    </div>
                    <div class="user-input-box">
                        <label for="cellnum">Contact Number</label>
                        <input type="text"
                                id="cellnum"
                                name="cellnum"
                                placeholder="Enter Contact Number"/>
                    </div>
                    <div class="user-input-box">
                        <label for="passw">Password</label>
                        <input type="text"
                                id="passw"
                                name="passw"
                                placeholder="Enter Password"/>
                    </div>

                </div>
                <div class="button-container">
                    <div class="form-submit-btn">
                        <input type="submit" value="Save"/>
                    </div>
                    <div class="form-submit-btn">
                        <input type="submit" value="Cancel"/>
                    </div>
                </div>

					</table>
				</div>
      </div>
      </div>
  );
}

export default Settings;
