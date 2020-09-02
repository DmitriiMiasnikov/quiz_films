
const defaultState = {
    menuItems: [
        {en: 'Main', ru: 'Главная'},
        {en: 'Films', ru: 'Фильмы'},
        {en: 'Serials', ru: 'Сериалы'},
    ],
    local: 'en'
}

const headerReducer = (state = defaultState, action) => {
    switch (action.type) {
        default: break;
    }
    return state;
}

export default headerReducer;