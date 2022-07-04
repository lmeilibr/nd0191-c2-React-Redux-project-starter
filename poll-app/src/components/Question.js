import {connect} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

export function formatDate(timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}


const Question = (props) => {
    const navigate = useNavigate();

    const toQuestionDetails = (e, id) => {
        e.preventDefault();
        navigate(`/questions/${id}`);
    }
    return (
        <div>
            {props.question.author}
            <br/>
            {formatDate(props.question.timestamp)}
            <br/>
            <Link to={`/questions/${props.id}`}>
                <button onClick={(e) => toQuestionDetails(e, props.id)}>
                    More Details
                </button>
            </Link>
        </div>
    )
}

const mapStateToProps = ({authedUser, users, questions}, {id}) => {
    const question = questions[id];

    return {
        authedUser,
        question
    };
};

export default connect(mapStateToProps)(Question);