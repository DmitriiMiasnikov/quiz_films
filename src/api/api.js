import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/'
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

export const authApi = {
    async me(email, password) {
        const response = await instance.get(`auth/me`, { email, password })
        return response.data;
    },
    async login(email, password) {
        const response = await instance.post(`auth/login`, { email, password })
        return response.data;
    },
    async logout() {
        const response = await instance.delete(`auth/login`)
        return response.data;
    },
}