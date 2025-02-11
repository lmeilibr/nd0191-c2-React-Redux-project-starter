import './App.css';
import {Route, Routes} from "react-router-dom"
import Login from "./Login";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import QuestionPage from "./QuestionPage";
import {useEffect} from "react";
import {handleInitialData} from "../actions/shared";
import {connect} from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import NotFound from "./NotFound";

function App(props) {
    useEffect(() => {
        props.dispatch(handleInitialData());
    }, []);

    return (
        <>
            <LoadingBar/>
            <div className="container">
                {props.loading === true ? <Login/> : (
                    <Routes>
                        <Route
                            path="*"
                            element={<NotFound/>}
                        />
                        <Route
                            exact
                            path="/"
                            element={<Dashboard/>}
                        />
                        <Route exact
                               path="/add"
                               element={<NewQuestion/>}
                        />
                        <Route exact
                               path="/leaderboard"
                               element={<Leaderboard/>}
                        />
                        <Route path="questions/:question_id"
                               element={<QuestionPage/>}
                        />
                    </Routes>
                )}
            </div>
        </>
    );
}

const mapStateToProps = ({authedUser}) => ({
    loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
