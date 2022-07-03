import './App.css';
import {Route, Routes} from "react-router-dom"
import Login from "./Login";
import Dashboard from "./Dashboard";
import AddPoll from "./AddPoll";
import Leaderboard from "./Leaderboard";
import QuestionPage from "./QuestionPage";

function App() {
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={<Dashboard/>}
            />
            <Route exact
                   path="/login"
                   element={<Login/>}
            />
            <Route exact
                   path="/add"
                   element={<AddPoll/>}
            />
            <Route exact
                   path="/leaderboard"
                   element={<Leaderboard/>}
            />
            <Route path="questions/:question_id"
                   element={<QuestionPage/>}
            />
        </Routes>
    );
}

export default App;
