import React from 'react'

const ManInsideBugWorkSpace = () => {
  return (
    <div>
			<div class="head-title">
				<div class="left">
					<h1>Parking System</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Bug Workspace</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Parking System</a>
						</li>
					</ul>
				</div>
				<div class="right">
					<button>View Members</button>
					<button>Add Members</button>
				</div>
			</div>


			<div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Project Status</h3>
					</div>
					<table>
						<thead>
							<tr>
								<th>Bug Name</th>
								<th>Date Assigned</th>
								<th>Severity</th>
								<th>Status</th>
								<th>Developer Assignee</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><p>auth stat bug</p></td>
								<td><p>9-01-2023</p></td>
								<td><p>Critical</p></td>
								<td><p>Active</p></td>
								<td><p>Enjambre</p></td>
							</tr>
							<tr>
								<td><p>null exception</p></td>
								<td><p>9-01-2023</p></td>
								<td><p>Low</p></td>
								<td><p>Active</p></td>
								<td><p>Salas</p></td>
							</tr>
							<tr>
								<td><p>database spike</p></td>
								<td><p>9-01-2023</p></td>
								<td><p>High</p></td>
								<td><p>Active</p></td>
								<td><p>Fernandez</p></td>
							</tr>
							<tr>
								<td><p>css bugs</p></td>
								<td><p>9-01-2023</p></td>
								<td><p>Medium</p></td>
								<td><p>Inactive</p></td>
								<td><p>Sanchez</p></td>
							</tr>
							<tr>
								<td><p>null exception</p></td>
								<td><p>9-01-2023</p></td>
								<td><p>Low</p></td>
								<td><p>Inactive</p></td>
								<td><p>Gantuangco</p></td>
							</tr>
						</tbody>
					</table>
				</div>
				
			</div>
    </div>
  )
}

export default ManInsideBugWorkSpace