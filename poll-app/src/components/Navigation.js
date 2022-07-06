import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setAuthedUser} from "../actions/authedUser";

function Navigation(props) {
    const handleLogout = () => {
        props.dispatch(setAuthedUser(null))
    }
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/leaderboard">Leaderboard</Link></li>
                <li><Link to="/add">New</Link></li>
                <li>{props.authedUser}</li>
                <li onClick={handleLogout}><Link to="/">Logout</Link></li>
            </ul>
        </nav>
    )
}

const mapStateToProps = ({authedUser}) => (
    {
        authedUser,
    }
)

export default connect(mapStateToProps)(Navigation)