import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/todos/'
const url = 'https://jsonplaceholder.typicode.com/'

function createInstance() {
    const instance = axios.create({
        baseURL,
        timeout: 50000,
    })
    return instance
}

export default class BaseApi {
    static api = createInstance()
    static url = url
}
