function Login() {
    return (
        <>
            <h1>Log In</h1>
            <div className="log">

            <img className="loginimage" src="/employeePollLogo.png" alt="AAA" width="30%"/>
            <form>
                <label htmlFor="User">Username</label>
                <input type="text" name="user" placeholder="Enter Username" required/>
                <label htmlFor="pws">Password</label>
                <input type="password" placeholder="Enter Password" required/>
                <button type="submit">Login</button>
            </form>
            </div>
        </>
    )
}

export default Login