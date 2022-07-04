import {useLocation, useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import Navigation from "./Navigation";

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
    console.log(props)
    return (
        <div>
            <Navigation/>
            <h1>Question Page</h1>
            <div>{props.question.author}</div>
            <div>
                <div>{props.question.optionOne.text}</div>
                <div>Votes {props.question.optionOne.votes.length}</div>
            </div>
            <div>{props.question.optionTwo.text}</div>
            <div>Votes {props.question.optionTwo.votes.length}</div>

        </div>

    )
}

const mapStateToProps = ({authedUser, questions, users}, props) => {
    const {question_id} = props.router.params;

    return {
        question: questions[question_id]
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPage));