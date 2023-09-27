import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectBugById } from './bugsApiSlice'

const Bug1 = ({ bugId }) => {

    const bug = useSelector(state => selectBugById(state, bugId))

    const navigate = useNavigate()

    if (bug) {
        const created = new Date(bug.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(bug.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const handleEdit = () => navigate(`/dash/bugs/${bugId}`)

        return (
            <tr className="table__row">
                <td className="table__cell bug__status">
                    {bug.completed
                        ? <span className="bug__status--completed">Completed</span>
                        : <span className="bug__status--open">Open</span>
                    }
                </td>
                <td className="table__cell bug__created">{created}</td>
                <td className="table__cell bug__updated">{updated}</td>
                <td className="table__cell bug__title">{bug.title}</td>
                <td className="table__cell bug__username">{bug.username}</td>

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
export default Bug1