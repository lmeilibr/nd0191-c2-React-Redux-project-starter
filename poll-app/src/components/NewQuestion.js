import Navigation from "./Navigation";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {addQuestions, handleAddQuestion} from "../actions/questions";
import {connect} from "react-redux";

const NewQuestion = (props) => {
    console.log(props)

    const navigate = useNavigate();
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");

    const handleFirst = (e) => {
        const textFirst = e.target.value;
        console.log(textFirst)

        setFirst(textFirst);
    };

    const handleSecond = (e) => {
        const textSecond = e.target.value;
        console.log(textSecond)

        setSecond(textSecond);
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        const info = {
            optionOneText: first,
            optionTwoText: second,
            author: props.authedUser,
        }
        console.log(info)

        props.dispatch(handleAddQuestion(info));


        setFirst("");
        setSecond("");

        navigate("/");
    }

    return (
        <>
            <Navigation/>
            <h1>Add Poll</h1>
            <h2>Would You Rather</h2>
            <h3>Create Your Own Pool</h3>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="first">First Option</label>
                    <input type="text" onChange={handleFirst} required/>
                </div>
                <div>
                    <label htmlFor="second">Second Option</label>
                    <input type="text" onChange={handleSecond} required/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

const mapStateToProps = ({authedUser}) => (
     {
        authedUser
    }
)

export default connect(mapStateToProps)(NewQuestion);