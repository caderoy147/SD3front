import React from 'react'

const ManBugWorkspaceEmpty = () => {
  return (
    <div>
    <section id="content">
        <main>
            <div class="head-title">
                <div class="left">
                    <h1>Bug Workspace</h1>
                    <ul class="breadcrumb">
                        <li>
                            <a href="#">Bug Workspace</a>
                        </li>
                        <li><i class='bx bx-chevron-right'></i></li>
                    </ul>
                </div> 
			</div>
            <div class="np">
                <div>
                    <h2>NO PROJECTS YET...</h2>
                </div>
                <div><h4>Create a Project and Add Team Members</h4></div>
            </div>
            <div class="button-container">
                <div class="form-submit-btn">
                    <input type="submit" value="Create Project"/>
                </div>
            </div>
		</main>
	</section>


    </div>
  )
}

export default ManBugWorkspaceEmpty