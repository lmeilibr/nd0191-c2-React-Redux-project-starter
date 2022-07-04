import {Link} from "react-router-dom";

function Navigation(){
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/leaderboard">Leaderboard</Link>
                    <Link to="/add">New</Link>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation