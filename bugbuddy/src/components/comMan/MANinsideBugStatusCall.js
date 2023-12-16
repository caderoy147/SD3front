// MANinsideBugStatusCall.js
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBugById, selectBugsByTeam } from '../../features/bugs/bugsApiSlice';
import useAuth from '../../hooks/useAuth';

const MANinsideBugStatusCall = () => {
    const { teamId, bugId } = useParams();
    const authUser = useAuth();
    const navigate = useNavigate();

    // Select bugs that belong to the specific team
    const bugsByTeam = useSelector(state => selectBugsByTeam(state, teamId));

    console.log('Auth User:', authUser);
    console.log('Bugs by Team:', bugsByTeam);
    console.log('Auth User ID:', authUser.id);
    console.log('Bugs by TeamName:', bugsByTeam.map(bug => bug.bugName));
    console.log('Bugs by TeamDev:', bugsByTeam.map(bug => bug.dev));
    console.log('Bugs by TeamMAn:', bugsByTeam.map(bug => bug.manager));
    console.log('Bugs by TeamQa:', bugsByTeam.map(bug => bug.qa));

    if (bugsByTeam && authUser) {
        return (
            <div>
                {bugsByTeam.map(bug => (
                    <tr key={bug.id}>
                        {/* Customize the content as needed for manager */}
                        {/* ... */}
                    </tr>
                ))}
                <p>HI</p>
            </div>
        );
    } else {
        return (
            <div>
                <p>User is not authorized to view this bug.</p>
            </div>
        );
    }
};

export default MANinsideBugStatusCall;

