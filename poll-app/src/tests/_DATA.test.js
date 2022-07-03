import {_saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";

describe('saveQuestion', () => {
    it('return saved questions if all expected fields are populated correctly', async () => {
        const mockQuestion = {
            optionOneText: 'First Question',
            optionTwoText: 'Second Question',
            author: 'Mock Author'
        }
        const result = await _saveQuestion(mockQuestion)
        expect(result).toHaveProperty('id')
    })
    it('return an error if incorrect data is passed to the function', async () => {
        const mockQuestion = {
            author: 'Mock Author'
        }
        await expect(_saveQuestion(mockQuestion)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author')
    })
})

describe('saveQuestionAnswer', () => {
    it('will return true if correctlt formatted data is passed to the function', async () => {
        const mockAnswer = {
            qid: '8xf0y6ziyjabvozdd253nd',
            authedUser: 'sarahedo',
            answer: 'optionOne'
        }
        const result = await _saveQuestionAnswer(mockAnswer)
        expect(result).toBeTruthy()
    })
    it('will return and error if incorrect data is passed to the function', async () => {
        const mockAnswer = {
            id: 'aaa',
            authedUser: 'sarahedo',
            answer: 'optionOne'
        }
        await expect(_saveQuestionAnswer(mockAnswer)).rejects.toEqual('Please provide authedUser, qid, and answer')
    })
})