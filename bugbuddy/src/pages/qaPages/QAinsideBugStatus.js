import React from 'react'
import QAinsideBugStatusList from '../../components/comQa/QAinsideBugStatusList'

const QAinsideBugStatus = () => {

  return (
    <div>
			<div class="head-title">
				<div class="left">
					<h1>Parking System</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Bug Status</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Parking System</a>
						</li>
					</ul>
				</div>
			</div>


			<div class="table-data">
				<div class="order">
					<div class="head">
							<QAinsideBugStatusList/>
				</div>
			</div>
   	 </div>
		</div>
  )
}

export default QAinsideBugStatus