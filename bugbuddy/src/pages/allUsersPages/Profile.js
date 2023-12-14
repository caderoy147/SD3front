import React from 'react';
import '../../styles/profile.css'


const Profile = () => {
  return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                    {/* <!-- meta --> */}
                    <div class="profile-user-box card-box bg-custom">
                        <div class="row">
                            <div class="col-sm-6"><span class="float-left mr-3"><img src="icon.jpg" alt="" class="thumb-lg rounded-circle"/></span>
                                <div class="media-body text-white">
                                    <h4 class="mt-1 mb-1 font-18">Angelo Jhann Salas</h4>
                                    <p class="font-13 text-light">Full Stack Developer</p>
                                    <p class="text-light mb-0">Cebu, Philippines</p>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="text-right">
                                    <button type="button" class="btn btn-light waves-effect"><i class="mdi mdi-account-settings-variant mr-1"></i> Edit Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--/ meta --> */}
                </div>
            </div>
            {/* <!-- end row --> */}
            <div class="row">
                <div class="col-xl-4">
                    {/* <!-- Personal-Information --> */}
                    <div class="card-box">
                        <h4 class="header-title mt-0">Personal Information</h4>
                        <div class="panel-body">
                            <hr/>
                            <div class="text-left">
                                <p class="text-muted font-13"><strong>Full Name :</strong> <span class="m-l-15">Angelo Jhann Salas</span></p>
                                <p class="text-muted font-13"><strong>Age</strong> <span class="m-l-5">23</span></p>
                                <p class="text-muted font-13"><strong>Mobile :</strong><span class="m-l-15"> 0999902020</span></p>
                                <p class="text-muted font-13"><strong>Email :</strong> <span class="m-l-15">angelo@gmail.com</span></p>
                                <p class="text-muted font-13"><strong>Location :</strong> <span class="m-l-15">Cebu City</span></p>
                                <p class="text-muted font-13"><strong>Zip Code :</strong> <span class="m-l-5">3000</span></p>
                                <p class="text-muted font-13"><strong>Languages :</strong> <span class="m-l-5">
                                    
                                    <span class="flag-icon flag-icon-us m-r-5 m-t-0" title="us"></span> 
                                    <span>English</span> </span><span class="m-l-5">
                                    <span class="flag-icon flag-icon-de m-r-5" title="de"></span> 
                                    <span>German</span> </span><span class="m-l-5">
                                    <span class="flag-icon flag-icon-es m-r-5" title="es"></span> 
                                    <span>Spanish</span> </span><span class="m-l-5">
                                    <span class="flag-icon flag-icon-fr m-r-5" title="fr"></span>
                                    <span>French</span></span>
                                    <p class="text-muted font-13"><strong>Company :</strong> <span class="m-l-5">Cebu Institute of Technology - University</span></p>
                                </p>
                            </div>

                        </div>
                    </div>
       
                </div>
                <div class="col-xl-8">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="card-box tilebox-one"><i class="icon-layers float-right text-muted"></i>
                                <h6 class="text-muted text-uppercase mt-0">Finished Projects</h6>
                                <h2 class="" data-plugin="counterup">524 +</h2><span class="badge badge-custom">100% </span><span class="text-muted"> Success Rate</span></div>
                        </div>
                        {/* <!-- end col --> */}
                        <div class="col-sm-4">
                            <div class="card-box tilebox-one"><i class="icon-paypal float-right text-muted"></i>
                                <h6 class="text-muted text-uppercase mt-0">Bugs Encountered</h6>
                                <h2 class=""><span data-plugin="counterup">239 +</span></h2><span class="badge badge-danger">50%</span><span class="text-muted"> SOLVED</span></div>
                        </div>
                        {/* <!-- end col --> */}
                        <div class="col-sm-4">
                            <div class="card-box tilebox-one"><i class="icon-rocket float-right text-muted"></i>
                                <h6 class="text-muted text-uppercase mt-0">Ongoing Projects</h6>
                                <h2 class="" data-plugin="counterup">57 +</h2><span class="badge badge-custom">22% </span><span class="text-muted"> Finished</span></div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div class="card-box">
                        <h4 class="header-title mt-0 mb-3">Experience</h4>
                        <div class="">
                            <div class="">
                                <h5 class="text-custom">Sofware Engineer</h5>

                                <p><b>2022 - Present</b></p>
                                <li>Engineered modern applications with Java, JavaScript, SQL Server, and No SQL.</li>
                                <li>Built innovative microservices and Web Services (incl. SOA/SOAP/REST/XML).</li>
                                <li>Utilized Cloud Foundry for efficient building on top of Kubernetes.</li>
                                <li>Efficiently deployed and integrated software engineered by team and updated integration/deployment scripts to improve continuous integration practices.</li>
                            </div>
                            <hr/>
                            <div class="">
                                <h5 class="text-custom">Senior Web Developer</h5>
                                <p><b>2020 - 2021</b></p>
                                <li>Implemented a Progressive Web App (PWA) strategy, enabling offline access and push notifications, increasing user engagement by 25% and achieving a Google Lighthouse performance score of 90+.</li>
                                <li>Actively contributed to open source projects, including the development of a popular web development library used by over 5,000 developers.</li>
                                <li>Designed and built a Single Page Application (SPA) using React, reducing server load and providing a seamless user experience with real-time chat functionality and dynamic data visualization.</li>
                            </div>
                        </div>
                    </div>
                    <div class="card-box">
                        <h4 class="header-title mb-3">Ongoing Projects</h4>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Project Name</th>
                                        <th>Start Date</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>User Profile</td>
                                        <td>08/30/2023</td>
                                        <td>09/030/2023</td>
                                        <td><span class="label label-info"><p>Work in Progress</p></span></td>
                                    
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Bugg Buddy Front End</td>
                                        <td>09/31/2023</td>
                                        <td>10/12/2023</td>
                                        <td><span class="label label-success"><p >Pending</p></span></td>
                                    
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Mobile Application development Bug</td>
                                        <td>8/26/2023</td>
                                        <td>09/10/2023</td>
                                        <td><span class="label label-pink"><p>Done</p></span></td>
                                    
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>GUI Application Bug</td>
                                        <td>10/05/2023</td>
                                        <td>10/26/2023</td>
                                        <td><span class="label label-purple"><p>Work in Progress</p></span></td>
                                    
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Data Base Development Bug</td>
                                        <td>10/22/2023</td>
                                        <td>11/10/2023</td>
                                        <td><span class="label label-warning"><p>Pending</p></span></td>
                                    
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            
            </div>
        
        </div>
  );
}

export default Profile;
