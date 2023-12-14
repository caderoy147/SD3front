import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectBugById } from './bugsApiSlice'
import { selectAllUsers } from '../users/usersApiSlice'
import EditBugForm from './EditBugForm'

const EditBug = () => {
    const { id } = useParams()

    const bug = useSelector(state => selectBugById(state, id))
    const users = useSelector(selectAllUsers)

    const content = bug && users ? <EditBugForm bug={bug} users={users} /> : <p>Loading...</p>

    return content
}
export default EditBug