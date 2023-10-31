import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectTeamById } from './teamsApiSlice'


const Team = ({ teamId }) => {

    const team = useSelector(state => selectTeamById(state, teamId))

    const navigate = useNavigate()

    if (team) {
        const created = new Date(team.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(team.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const handleEdit = () => navigate(`/dash/teams/${teamId}`)

        return (
            <tr className="table__row">
                <td className="table__cell team__status">
                    {team.completed
                        ? <span className="team__status--completed">Completed</span>
                        : <span className="team__status--open">Open</span>
                    }
                </td>
                {/* <td className="table__cell team__created">{created}</td> */}
                {/* <td className="table__cell team__updated">{updated}</td> */}
                <td className="table__cell team__title">{team.teamname}</td>

                <td className="table__cell">
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        )

    } else return null
}
export default Team