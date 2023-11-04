import React from 'react'
import '../../index.css'

import BugsList from '../../features/bugs/BugsList'

const MyProjects = () => {
  return (
			<div>
				<div class="head-title">
				<div class="left">
					<h1>Bug Workspace</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Bug Workspaces</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Home</a>
						</li>
					</ul>
				</div>

				<a href="#" class="btn-download">
					<i class='bx bxs-cloud-download' ></i>
					<span class="text">Create Project</span>
				</a>
				
			</div>
			

				{/* <div className="box-info"> //this program is compoenent aaa another box to add mulitplecomponents
						
					<div className="table-data">
						<div className="order">
							 <BugsList/>
						</div>
					</div>

				</div> */}




			</div>
  )
}

export default MyProjects