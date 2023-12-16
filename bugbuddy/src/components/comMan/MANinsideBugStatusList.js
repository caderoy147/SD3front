// MANinsideBugStatusList.js
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetBugsQuery, selectBugsByTeam } from "../../features/bugs/bugsApiSlice";
import MANinsideBugStatusCall from "./MANinsideBugStatusCall";

const MANinsideBugStatusList = () => {
    const {
        data: bugs,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetBugsQuery();

    const { teamId } = useParams();

    const bugsByTeam = useSelector(state => selectBugsByTeam(state, teamId));

    let content;

    if (isLoading) content = <p>Loading...</p>;

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>;
    }

    if (isSuccess) {
        
        console.log('Bugs in MANinsideBugStatusList:', bugsByTeam);
        content = (
            <table>
                <thead>
                    <tr>
                        <th scope="col" className="table__th bug__title">Bug Name</th>
                        <th scope="col" className="table__th bug__created">Date Assigned</th>
                        <th scope="col" className="table__th bug__updated">Deadline</th>
                        <th scope="col" className="table__th bug__updated">Action</th>
                        <th scope="col" className="table__th bug__status">Remarks</th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
           
            </table>
        );
    }

    return content;
};

export default MANinsideBugStatusList;