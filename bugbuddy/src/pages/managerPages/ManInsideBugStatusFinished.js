import React from 'react'
import '../../styles/MANstyles/ManInsideBugStatus.css'
import MANinsideBugStatusList from '../../components/comMan/MANinsideBugStatusList'


const ManInsideBugStatusFinished = () => {
  return (
    <div>
			<div class="head-title">
				<div class="left">
					<h1>null exception</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Project Status</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">null exception</a>
						</li>
					</ul>
				</div>
			</div>


			<div class="table-data">
				<div class="order">
					<div class="head">
						<MANinsideBugStatusList/>
					</div>
				</div>
			</div>
			
    </div>
  )
}

export default ManInsideBugStatusFinished