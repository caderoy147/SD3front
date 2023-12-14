import React from 'react'
import '../../styles/MANstyles/ManBugWorkSpaceEmpty.css'

const ManBugWorkSpaceEmpty = () => {
  return (
    <div>
        
            <div class="npManager">
                <div>
                    <h2>NO PROJECTS YET...</h2>
                </div>
                <div><h4>Create a Project and Add Team Members</h4></div>
            </div>
            <div class="button-container-Man-Np">
                <div class="form-submit-btn-Man-Np">
                    <input type="submit" value="Create Project"/>
                </div>
            </div>
    </div>
  )
}

export default ManBugWorkSpaceEmpty