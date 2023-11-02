import React from 'react'
import '../../index.css'

import BugsList from '../../features/bugs/BugsList'

const MyProjects = () => {
  return (
			<div>
				<div class="head-title">
				<div class="left">
					<h1>My Projects</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">My Projects</a>
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
			
				<div className="box-info">
						
					<div className="table-data">
						<div className="order">
							<div className="head">
								<h3>Recent Projects</h3>
								<i className='bx bx-search' ></i>
								<i className='bx bx-filter' ></i>
							</div>
							<table>
								<thead>
									<tr>
									</tr>
								</thead>
								<tbody>
									<BugsList/>
								</tbody>
							</table>
						</div>


					</div>

				</div>
			</div>
  )
}

export default MyProjects