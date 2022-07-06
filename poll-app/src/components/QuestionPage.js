import {useLocation, useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import Navigation from "./Navigation";
import {handleAddAnswer} from "../actions/questions";
import {addUserAnswer} from "../actions/users";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{location, navigate, params}}/>;
    };

    return ComponentWithRouterProp;
};

const QuestionPage = (props) => {

    const navigate = useNavigate();

    const handleFirstVote = (e) => {
        e.preventDefault();
        const info = {
            authedUser: props.authedUser,
            qid: props.question.id,
            answer: 'optionOne'
        }

        props.dispatch(handleAddAnswer(info));
        props.dispatch(addUserAnswer(info));

        navigate("/");
    }

        const handleSecondVote = (e) => {
        e.preventDefault();
        const info = {
            authedUser: props.authedUser,
            qid: props.question.id,
            answer: 'optionTwo'
        }

        props.dispatch(handleAddAnswer(info));
        props.dispatch(addUserAnswer(info));

        navigate("/");
    }

    // Disable button if user already answered question
    const qid = props.question.id
    const answers = Object.keys(props.users[props.authedUser].answers)
    const disable = answers.includes(qid)

    //Calculate Votes Pct
    const q1Votes = props.question.optionOne.votes.length
    const q2Votes =props.question.optionTwo.votes.length
    const q1Pct = parseFloat(100*q1Votes/(q1Votes+q2Votes)).toFixed(2)+"%"
    const q2Pct = parseFloat(100*q2Votes/(q1Votes+q2Votes)).toFixed(2)+"%"


    const ans = props.users[props.authedUser].answers[qid]

    let bg1 = "white"
    let bg2 = "white"
    if (ans === 'optionOne'){
        bg1 = "lightblue"
    }
    if (ans === 'optionTwo'){
        bg2 = "lightblue"
    }

    return (
        <div>
            <Navigation/>
            <h1>Question Page</h1>
            <div>{props.question.author}</div>
            <div><img src={props.users[props.authedUser].avatarURL} alt="avatar" width={100}/></div>
            <h3>Would You Rather</h3>
            <div style={{backgroundColor: bg1}}>
                <h3 >Options 1</h3>
                <div>{props.question.optionOne.text}</div>
                {disable === true ? <p>Number of People who voted for this option | {q1Votes} | Percentage: {q1Pct}</p>
                    : <button onClick={handleFirstVote}>Click</button>}

            </div>
            <div style={{backgroundColor: bg2}}>
                <h3>Options 2</h3>
                <div>{props.question.optionTwo.text}</div>
                {disable === true ? <p>Number of People who voted for this option | {q2Votes} | Percentage: {q2Pct}</p>
                    :<button onClick={handleSecondVote}>Click</button>}
            </div>
        </div>
    )
}

const mapStateToProps = ({authedUser, questions, users}, props) => {
    const {question_id} = props.router.params;

    return {
        question: questions[question_id],
        authedUser,
        users,
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPage));