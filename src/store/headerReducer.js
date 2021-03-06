const SWITCH_LOCAL = 'SWITCH_LOCAL';

const defaultState = {
    menuItems: [
        { en: 'All quiz', ru: 'Все тесты' },
        { en: 'Films', ru: 'Фильмы' },
        { en: 'Serials', ru: 'Сериалы' },
    ],
    authItems: [
        { en: 'Registration', ru: 'Регистрация' },
        { en: 'Authorization', ru: 'Авторизация' }
    ],
    local: 'en'
}

const headerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case (SWITCH_LOCAL): {
            return { ...state, local: state.local === 'en' ? 'ru' : 'en' }
        }
        default: break;
    }
    return state;
}
export const switchLocal = () => {
    return { type: SWITCH_LOCAL }
}

export default headerReducer;