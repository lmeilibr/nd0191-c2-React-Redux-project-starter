import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setAuthedUser} from "../actions/authedUser";
import CoreNav from "./CoreNav";

function Navigation(props) {
    const handleLogout = () => {
        props.dispatch(setAuthedUser(null))
    }
    return (
        <nav>
            <ul>
                <CoreNav/>
                <li><img src={props.users[props.authedUser].avatarURL} alt="avatar" width={50}/></li>
                <li>{props.authedUser}</li>
                <li onClick={handleLogout}><Link to="/">Logout</Link></li>
            </ul>
        </nav>
    )
}

const mapStateToProps = ({authedUser, users}) => (
    {
        authedUser,
        users,
    }
)

export default connect(mapStateToProps)(Navigation)