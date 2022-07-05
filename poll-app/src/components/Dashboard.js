import Navigation from "./Navigation";
import {connect} from "react-redux";
import Question from "./Question";

const Dashboard = (props) => {
    const answered = Object.keys(props.users[props.authedUser].answers)
    const unanswered = props.questionIds.filter((id)=>{
        return !answered.includes(id);
    })


    return (
        <>
            <Navigation/>
            <h1>Dashboard Page</h1>
            <h2>Unanswered</h2>
            <ul>
                {unanswered.map((id)=>(
                    <li key={id}>
                        <Question id={id}/>

                    </li>
                ))}
            </ul>
            <h2>Done</h2>
            <ul>
                {answered.map((id)=>(
                    <li key={id}>
                        <Question id={id}/>
                    </li>
                ))}
            </ul>
        </>
    );
};

const mapStateToProps = ({questions, users, authedUser}) => ({
    users,
    authedUser,
    questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
});


export default connect(mapStateToProps)(Dashboard);