import React from 'react'
import TeamsList from '../../features/teams/TeamsList'

const DevQABugWorkSpace = () => {
  return (
    <div>
			<div class="head-title">
				<div class="left">
						<h1>Bug Workspace</h1>
						<ul class="breadcrumb">
							<li>
								<a class="active" href="#">Bug Workspace</a>
							</li>
							<li><i class='bx bx-chevron-right' ></i></li>
						</ul>
				</div>
			</div>


			<div class="table-data">
				<div class="order">
							<TeamsList/>
				</div>
				
			</div>

    </div>
  )
}

export default DevQABugWorkSpace