import {ADD_ANSWER, ADD_QUESTION, RECEIVE_QUESTIONS} from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case ADD_ANSWER:
            const {info} = action
            const ans = info.answer
            return {
                ...state,
                [info.qid]: {
                    ...state[info.qid],
                    [ans]: {
                        ...state[info.qid][ans],
                        votes: state[info.qid][ans].votes.concat([info.answer.authedUser])
                    }
                }
            };
        default:
            return state;
    }
}