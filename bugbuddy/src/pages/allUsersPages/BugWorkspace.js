import React from 'react'
import '../../index.css'
import TeamsList from '../../features/teams/TeamsList'

const BugWorkspace = () => {
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


			<div>
				<TeamsList/>
			</div>


			</div>
  )
}

export default BugWorkspace