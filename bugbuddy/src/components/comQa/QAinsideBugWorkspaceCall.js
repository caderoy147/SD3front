import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectBugById } from '../../features/bugs/bugsApiSlice'

const QAinsideBugWorkspaceCall = ({ bugId }) => {

  const bug = useSelector(state => selectBugById(state, bugId))

  const navigate = useNavigate()

  if (bug) {
      const created = new Date(bug.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

      const updated = new Date(bug.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

      const handleEdit = () => navigate(`/dash/bugs/${bugId}`)

      const handleConfirm = () => navigate(`/dashboard/QAacceptOrDeny`)

      // const handleConfirm = () => navigate(`/dash/QAacceptOrDeny/${bugId}`)

      return (
          <tr>
              <td className="table__cell bug__title">{bug.bugName}</td>
              <td className="table__cell bug__created">{created}</td>
              <td className="table__cell bug__created">{bug.severity}</td>
              <td className="table__cell bug__status">
                  {bug.completed
                      ? <span className="bug__status--completed">Completed</span>
                      : <span className="bug__status--open">Open</span>
                  }
              </td>
              <td className="table__cell bug__username">{bug.username}</td>
          </tr>
      )

  } else return null
}

export default QAinsideBugWorkspaceCall