import { useGetBugsQuery } from "./bugsApiSlice"
import Bug from "./Bug1"

const BugsList = () => {
    const {
        data: bugs,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetBugsQuery()

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = bugs

        const tableContent = ids?.length
            ? ids.map(bugId => <Bug key={bugId} bugId={bugId} />)
            : null

        content = (
            <table className="table table--bugs">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th bug__status">Status</th>
                        <th scope="col" className="table__th bug__created">Created</th>
                        <th scope="col" className="table__th bug__updated">Updated</th>
                        <th scope="col" className="table__th bug__title">Title</th>
                        <th scope="col" className="table__th bug__username">Owner</th>
                        <th scope="col" className="table__th bug__edit">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default BugsList