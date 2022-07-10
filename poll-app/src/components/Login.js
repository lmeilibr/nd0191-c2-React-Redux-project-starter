import {connect} from "react-redux";
import {setAuthedUser} from "../actions/authedUser";

function Login(props) {
    console.log(props)
    const handleLogin = (e) =>{
        e.preventDefault()
        const user = e.target['user'].value
        const pwd = e.target['password'].value
        if (pwd === props.users[user].password){
            props.dispatch(setAuthedUser(user))
        }
    }

    return (
        <>
            <h1>Log In</h1>
            <div className="log">

            <img className="loginimage" src="/employeePollLogo.png" alt="AAA" width="30%"/>
            <form onSubmit={handleLogin}>
                <label htmlFor="User">Username</label>
                <input data-testid="userinput" type="text" name="user" placeholder="Enter Username" required/>
                <label htmlFor="pws">Password</label>
                <input data-testid="pwdinput" type="password" name='password' placeholder="Enter Password" required/>
                <button data-testid="btn-submit" type="submit">Login</button>
            </form>
            </div>
        </>
    )
}
const mapStateToProps = ({users}) => (
     {
        users,
    }
)

export default connect(mapStateToProps)(Login)