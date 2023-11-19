import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectBugById } from '../../features/bugs/bugsApiSlice'

const DEVinsideBugStatusCall = ({ bugId }) => {
    const bug = useSelector(state => selectBugById(state, bugId))
    const navigate = useNavigate()

    if (bug) {
        const created = new Date(bug.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })
        const updated = new Date(bug.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const handleEdit = () => navigate(`/dash/bugs/${bugId}`)
        const handleConfirm = () => navigate(`/dashboard/QAacceptOrDeny`)
        const handleView = () => navigate(`/dashboard/QAacceptOrDeny`)
        const handleReview =() => navigate(`/dashboard/QAacceptOrDeny`)
        const handleFix = () => navigate(`/dashboard/QAacceptOrDeny`)
        
        let buttonLabel = 'View'
        let buttonAction = handleView

        if (bug.remarks === 'denied') {
            buttonLabel = 'Fix'
            buttonAction = handleFix
        }

        return (
            <tr>
                <td className="table__cell bug__title" onClick={handleConfirm}>{bug.bugName}</td>
                <td className="table__cell bug__created">{created}</td>
                <td className="table__cell bug__created">{updated}</td>
                <td className="table__cell bug__status">
                    <span className={`bug__status--${bug.remarks}`}>{bug.remarks}</span>
                    <button onClick={buttonAction}>{buttonLabel}</button>
                </td>
            </tr>
        )
    } else {
        return null
    }
}

export default DEVinsideBugStatusCall


