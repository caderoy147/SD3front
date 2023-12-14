import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../../features/users/usersApiSlice';
import useAuth from '../../hooks/useAuth'; // Adjust the path as needed
import { useAddNewTeamMutation } from "../../features/teams/teamsApiSlice"

const CreateTeam = ({ onSubmit }) => {

    const [addNewTeam, {
      isLoading,
      isSuccess,
      isError,
      error
  }] = useAddNewTeamMutation()

  const [teamname, setTeamname] = useState('');
  const [projectname, setProjectname] = useState('');
  const [teamdescription, setTeamdescription] = useState('');
  const [developerList, setDeveloperList] = useState([]);
  const [selectedDeveloper, setSelectedDeveloper] = useState('');
  const [qualityA, setQualityA] = useState('');
  const [manager, setManager] = useState('');

  // Get all users from the Redux store
  const allUsers = useSelector(selectAllUsers);

  

  // Get information about the currently authenticated user using useAuth
  const authUser = useAuth();
  

  // Filter users based on the role "Developer"
  const developerOptions = allUsers
    .filter(user => user.roles.includes('Developer'))
    .map(user => (
      <option key={user.id} value={user.id}>
        {user.username}
      </option>
    ));

  // Filter users based on the role "Quality Assurance"
  const qualityAOptions = allUsers
    .filter(user => user.roles.includes('Quality Assurance'))
    .map(user => (
      <option key={user.id} value={user.id}>
        {user.username}
      </option>
    ));

    
  const managerOptions = allUsers
  .filter(user => user.roles.includes('Manager'))
  .map(user => (
    <option key={user.id} value={user.id}>
      {user.username}
    </option>
  ));

    const handleAddDeveloper = () => {
      // Add the selected developer to the developerList array
      if (selectedDeveloper) {
        setDeveloperList(prevList => [...prevList, selectedDeveloper]);
        // Clear the selected developer in the dropdown
        setSelectedDeveloper('');
      }
    };
  
    const handleRemoveDeveloper = (developerId) => {
      // Remove the selected developer from the developerList array
      setDeveloperList(prevList => prevList.filter(id => id !== developerId));
    };
  

    const handleSubmit = async () => {
      // Validate required fields
      if (!teamname) {
        console.error('Team Name is required');
        return;
      }
    
      if (!projectname) {
        console.error('Project Name is required');
        return;
      }
    
      if (!teamdescription) {
        console.error('Team Description is required');
        return;
      }
    
      if (!qualityA) {
        console.error('Quality Assurance is required');
        return;
      }
    
     
      if (!manager) {
        console.error('Manager is required');
        return;
      }
    
      try {
        // Validate and submit the form
        const teamData = {
          teamname,
          projectname,
          teamdescription,
          developerList,
          qualityA,
          manager
        };
    
        // Call the mutation function
        const result = await addNewTeam(teamData).unwrap();
    
        // Handle the result (e.g., show success message)
        console.log('New team created:', result);
      } catch (error) {
        // Handle errors (e.g., show error message)
        console.error('Error creating team:', error);
      }
    };
    console.log(authUser.id);
    console.log(authUser.username);
  return (
    <div>
      <h2>Create Team</h2>
      <form>
        <div>
          <label>Team Name: </label>
          <input type="text" value={teamname} onChange={(e) => setTeamname(e.target.value)} />
        </div>
        <div>
          <label>Project Name: </label>
          <input type="text" value={projectname} onChange={(e) => setProjectname(e.target.value)} />
        </div>
        <div>
          <label>Team Description: </label>
          <textarea value={teamdescription} onChange={(e) => setTeamdescription(e.target.value)} />
        </div>
        {/* Other input fields */}
        <div>
          <label>Developers: </label>
          <select
            value={selectedDeveloper}
            onChange={(e) => setSelectedDeveloper(e.target.value)}
          >
            <option value="">Select Developer</option>
            {developerOptions}
          </select>
          <button type="button" onClick={handleAddDeveloper}>
            Add Developer
          </button>
          <ul>
            {developerList.map(developerId => (
              <li key={developerId}>
                {allUsers.find(user => user.id === developerId)?.username}
                <button type="button" onClick={() => handleRemoveDeveloper(developerId)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <label>Quality Assurance: </label>
          <select value={qualityA} onChange={(e) => setQualityA(e.target.value)}>
            <option value="">Select Quality Assurance</option>
            {qualityAOptions}
          </select>
        </div>
        <div>
          <label>Manager: </label>
          <select value={manager} onChange={(e) => setManager(e.target.value)}>
            <option value="">Select Manager</option>
            {managerOptions}
          </select>
        </div>
        <button type="button" onClick={handleSubmit}>
          Create Team
        </button>
      </form>
      
    </div>
  );
};

export default CreateTeam;


