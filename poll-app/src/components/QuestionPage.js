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
    console.log(props)

    return (
        <div>
            <Navigation/>
            <h1>Question Page</h1>
            <div>{props.question.author}</div>
            <div>
                <div>{props.question.optionOne.text}</div>
                <button onClick={handleFirstVote}>Click</button>
            </div>
            <div>
                <div>{props.question.optionTwo.text}</div>
                <button onClick={handleSecondVote}>Click</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({authedUser, questions, users}, props) => {
    const {question_id} = props.router.params;

    return {
        question: questions[question_id],
        authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPage));