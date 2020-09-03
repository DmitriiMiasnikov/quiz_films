const STEP_UP = 'STEP_UP';
const GET_QUIZ = 'GET_QUIZ';

const defaultState = {
    step: 0,
    currentQuiz: null
}

const quizReducer = (state = defaultState, action) => {
    switch (action.type) {
        case (STEP_UP): {
            return { ...state, step: state.step += 1 }
        }
        case (GET_QUIZ): {
            return { ...state, currentQuiz: action.currentQuiz }
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

export default quizReducer;