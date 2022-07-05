import {ADD_USER_ANSWER, RECEIVE_USERS} from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            };
        case ADD_USER_ANSWER:
            const {info} = action
            return {
                ...state,
                [info.authedUser]: {
                    ...state[info.authedUser],
                    answers: {
                        ...state[info.authedUser].answers,
                        [info.qid]: info.answer
                    }
                },
            }
        default:
            return state;
    }
}