import axios from 'axios'

const instance = axios.create({
    baseURL:"https://messaging-app-mern-8a4089593683.herokuapp.com"
})

export default instance
