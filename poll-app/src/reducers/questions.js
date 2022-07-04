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
            const {answer} = action
            const ans = answer.answer
            return {
                ...state,
                [answer.qid]: {
                    ...state[answer.qid],
                    [ans]: {
                        ...state[answer.qid][ans],
                        votes: state[answer.qid][ans].votes.concat([answer.authedUser])
                    }
                }
            };
        default:
            return state;
    }
}