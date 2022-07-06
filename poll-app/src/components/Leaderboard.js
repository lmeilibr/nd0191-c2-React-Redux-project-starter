import Navigation from "./Navigation";
import {connect} from "react-redux";

const Leaderboard = (props) => {
    return (
        <>
            <Navigation/>
            <h1>Leaderboard</h1>
            <table>
                <thead>
                <tr>
                    <th>Users</th>
                    <th>Answered</th>
                    <th>Created</th>
                </tr>
                </thead>
                <tbody>
                {props.usersKeys.map((user) => (
                    <tr key={props.users[user].name}>
                        <td><img src={props.users[user].avatarURL} alt="avatar" width={75}/>{props.users[user].name}</td>
                        <td>{Object.keys(props.users[user].answers).length}</td>
                        <td>{props.users[user].questions.length}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

const mapStateToProps = ({users, questions, authedUser}) => ({
    // usersKeys: Object.keys(users),
    questions,
    users,
    authedUser,
    usersKeys: Object.keys(users).sort(
        (a, b) => {
            return (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length)
        }
    ),
})
export default connect(mapStateToProps)(Leaderboard);