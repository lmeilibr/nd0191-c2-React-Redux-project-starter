import {saveQuestion, saveQuestionAnswer} from "../utils/api";
import {hideLoading, showLoading} from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

export function handleAddQuestion(info) {
    return (dispatch) => {

        dispatch(showLoading());

        console.log(info)

        return saveQuestion(info)
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()));
    };
}

export function handleAddAnswer(info){
    console.log(info)
    return (dispatch) => {
        dispatch(showLoading());
        console.log(info)

        return saveQuestionAnswer(info)
            .then((answer) => dispatch(addAnswer(info)))
            .then(() => dispatch(hideLoading()));
    };

}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

export function addAnswer(info) {
    return {
        type: ADD_ANSWER,
        info,
    };
}