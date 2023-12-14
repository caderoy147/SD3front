import { useGetTeamsQuery } from "./teamsApiSlice";
import ManagerTeam from './ManagerTeam';
import ManBugWorkSpaceEmpty from "../../pages/managerPages/ManBugWorkSpaceEmpty";

const ManagerTeamsList = () => {
    const {
        data: teams,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTeamsQuery();

    let content;

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>;
    }

    if (isSuccess) {
        const { ids } = teams;

        if (ids && ids.length > 0) {
            const tableContent = ids.map(teamId => <ManagerTeam key={teamId} teamId={teamId} />);
            content = (
                <table className="table table--teams">
                    <thead className="table__thead">
                        <tr>
                            <th scope="col" className="table__th team__status">Status</th>
                            <th scope="col" className="table__th team__teamname">Teamname</th>
                            <th scope="col" className="table__th team__created">Date Assigned</th>
                            <th scope="col" className="table__th team__progress">Progress</th>
                            <th scope="col" className="table__th team__edit">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent}
                    </tbody>
                </table>
            );
        } else {
            // Render a message when there are no teams
            content = <ManBugWorkSpaceEmpty />;
        }
    }

    return content;
}

export default ManagerTeamsList;
