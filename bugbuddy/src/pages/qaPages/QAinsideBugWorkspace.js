import React from 'react'
import '../../styles/QAstyles/QAinsidebugworkspace.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from "@fortawesome/free-solid-svg-icons"

import QAinsideBugWorkspaceList from '../../components/comQa/QAinsideBugWorkspaceList'

const QAinsideBugWorkspace = () => {
  return (
		<div className="QA">
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
					<button>Report a Bug  <FontAwesomeIcon icon={faBug} /></button>
				</div>
			</div>


			<div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Parking System</h3>
					</div>
					<QAinsideBugWorkspaceList/>
				</div>
				
			</div>


    </div>
  )
}

export default QAinsideBugWorkspace