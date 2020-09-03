const STEP_UP = 'STEP_UP';
const GET_QUIZ = 'GET_QUIZ';
const CHECK_ANSWER = 'CHECK_ANSWER';
const RESULT_TEXT = 'RESULT_TEXT';

const defaultState = {
    step: 0,
    currentQuiz: null,
    answers: null,
    resultText: null,
}

const quizReducer = (state = defaultState, action) => {
    switch (action.type) {
        case (STEP_UP): {
            return { ...state, step: state.step += 1 }
        }
        case (GET_QUIZ): {
            return { ...state, currentQuiz: action.currentQuiz }
        }
        case (CHECK_ANSWER): {
            return {
                ...state, answers: action.answersArr.map((el, i) => {
                    if (i > action.step) {
                        return null
                    } else if (i < action.step) {
                        return state.answers[i]
                    } else if (action.answer === state.currentQuiz.questions[action.step].currect) {
                        return [true, action.item]
                    } else return [false, action.item]
                })
            }
        }
        case (RESULT_TEXT): {
            return { ...state, resultText: {
                ru: `Верно завершено ${action.right} из ${action.all}.`,
                en: `Right answers ${action.right} from ${action.all}.`
            } }
        }
        default: break;
    }
    return state;
}
export const stepUp = () => {
    return { type: STEP_UP }
}
export const getQuiz = (currentQuiz) => {
    return { type: GET_QUIZ, currentQuiz }
}
export const checkAnswer = (answer, step, answersArr, item) => {
    return { type: CHECK_ANSWER, answer, step, answersArr, item }
}
export const getResultText = (right, all) => {
    return { type: RESULT_TEXT, right, all }
}

export default quizReducer;