import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBugById, selectBugsByTeam } from '../../features/bugs/bugsApiSlice';
import useAuth from '../../hooks/useAuth';

const DEVinsideBugStatusCall = () => {
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
    console.log('Bugs by TeamMAn:', bugsByTeam.map(bug => bug.manager))
    console.log('Bugs by TeamQa:', bugsByTeam.map(bug => bug.qa))

    if (bugsByTeam && authUser) {
        return (
            <>
                {bugsByTeam.map(bug => (
                    <tr key={bug.id}>
                        <td className="table__cell bug__title" onClick={() => navigate(`/dash/bugs/${bug.id}`)}>
                            {bug.bugName}
                        </td>
                        <td className="table__cell bug__created">
                            {new Date(bug.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })}
                        </td>
                        <td className="table__cell bug__created">
                            {new Date(bug.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })}
                        </td>
                        <td className="table__cell bug__status">
                            <button
                                onClick={() => navigate(`/dashboard/QAacceptOrDeny`)}
                                className={`${
                                    bug.remarks === 'denied'
                                        ? 'DEVprojectstatus'
                                        : bug.remarks === 'review'
                                        ? 'red-button-DEVprojectstatus'
                                        : 'green-button-DEVprojectstatus'
                                }`}
                            >
                                {bug.remarks === 'denied' ? 'Fix' : 'View'}
                            </button>
                        </td>
                        <td>
                            <span className={`bug__status--${bug.remarks}`}>{bug.remarks}</span>
                        </td>
                    </tr>
                ))}
            </>
        );
    } else {
        return (
            <tr>
                <td colSpan="5">
                    <p>User is not authorized to view this bug.</p>
                </td>
            </tr>
        );
    }
};

export default DEVinsideBugStatusCall;
