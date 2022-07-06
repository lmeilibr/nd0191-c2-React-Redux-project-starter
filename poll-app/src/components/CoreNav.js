import {Link} from "react-router-dom";

const CoreNav = () => {
    return (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/add">New</Link></li>
        </>
    )
}

export default CoreNav;