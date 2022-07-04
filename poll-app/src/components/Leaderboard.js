import Navigation from "./Navigation";
import {connect} from "react-redux";

const Leaderboard = (props) => {
    return (
        <>
            <Navigation/>
            <h1>Leaderboard</h1>
            <table>
                <thead>
                <th>Users</th>
                <th>Answered</th>
                <th>Created</th>
                </thead>
                <tbody>
                {props.usersKeys.map((user) => (
                    <tr key={user.id}>
                        <td>{props.users[user].name}</td>
                        <td>{Object.keys(props.users[user].answers).length}</td>
                        <td>{props.users[user].questions.length}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

const mapStateToProps = ({users, questions}) => ({
    usersKeys: Object.keys(users),
    questions,
    users
})
export default connect(mapStateToProps)(Leaderboard);