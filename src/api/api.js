import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://nodejs.amyasnikov.pro/api/'
});
export const quizApi = {
    async getAllQuiz() {
        const response = await instance.get('quiz')
        return response;
    },
    async getFilmsQuiz() {
        const response = await instance.get('quiz')
        return response.filter(el => el.type === 'films');
    },
    async getSerialsQuiz() {
        const response = await instance.get('quiz')
        return response.filter(el => el.type === 'serials');
    }
}