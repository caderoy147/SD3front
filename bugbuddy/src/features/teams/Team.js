import React from 'react';
import { useSelector } from 'react-redux';
import { selectTeamById } from './teamsApiSlice';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Team = ({ teamId }) => {
    const team = useSelector(state => selectTeamById(state, teamId));
    const navigate = useNavigate();
    const authUser = useAuth();

    if (team) {
        const isUserOnTeam =
            (team.qualityA && team.qualityA._id === authUser.id) ||
            (team.developerList.some(developer => developer._id === authUser.id)) ||
            (team.manager && team.manager._id === authUser.id);

        if (!isUserOnTeam) {
            console.log('User is not on the team. Rendering null.');
            return null;
        }


        return (
            <tr className="table__row">

                <td>
                        {team.teamname}
                </td>

                <td className="table__cell team__title">
                    {/* Make the team name clickable and redirect to QAinsideBugWorkspace */}
                    <button
                        className="team-link"
                        onClick={() => {
                            if (authUser.isQualityAssurance) {
                                navigate(`/dashboard/QAinsideBugWorkspace/${team._id}`);
                            } else if (authUser.isDeveloper) {
                                navigate(`/dashboard/DEVinisdebugstatus/${team._id}`);
                            }
                        }}
                    >
                        {team.projectname}
                    </button>
                </td>

                <td>
                   50%
                </td>





                <td className="table__cell">
                    <button
                        className="icon-button table__button"
                        onClick={() => {
                            // Handle other actions if needed
                        }}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        );
    } else {
        console.log('Team is null. Rendering null.');
        return null;
    }
};

export default Team;
