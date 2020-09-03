const SWITCH_LOCAL = 'SWITCH_LOCAL';

const defaultState = {
    quiz: [
        {
            name: 'top_250_films',
            en: 'top 250 films', 
            ru: '250 лучших фильмов', 
            src: 'https://st.kp.yandex.net/im/kadr/3/1/1/kinopoisk.ru-Vikings-3111254.jpg',
            questions: [
                { 
                    options: ['vikings', 'some other', 'some else', 'some more'],
                    currect: 'vikings',
                    src: 'https://st.kp.yandex.net/im/kadr/3/1/1/kinopoisk.ru-Vikings-3111254.jpg'
                },
                {
                    options: ['vikings', 'gfhasfsd', 'dfcaasd', 'sss'],
                    currect: 'vikings',
                    src: 'https://st.kp.yandex.net/im/kadr/3/1/1/kinopoisk.ru-Vikings-3111254.jpg'
                }
            ]
        },
    ]
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