import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersApiSlice'
import NewBugForm from './NewBugForm'

const NewBug = () => {
    const users = useSelector(selectAllUsers)

    const content = users ? <NewBugForm users={users} /> : <p>Loading...</p>
 

    return content
}
export default NewBug