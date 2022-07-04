import {saveQuestion} from "../utils/api";
import {hideLoading, showLoading} from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

export function handleAddQuestions(info) {
    return (dispatch, getState) => {
        const {authedUser} = getState();

        dispatch(showLoading());

        return saveQuestion({
            optionOneText: info.optionOneText,
            optionTwoText: info.optionTwoText,
            author: authedUser,

        })
            .then((tweet) => dispatch(saveQuestion(info)))
            .then(() => dispatch(hideLoading()));
    };
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

export function addQuestions(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

export function addAnswer(question) {
    return {
        type: ADD_ANSWER,
        question,
    };
}