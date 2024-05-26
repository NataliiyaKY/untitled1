import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../model/IUserModel";
import {IPostModel} from "../model/IPostModel";
import {ICommentModel} from "../model/ICommentModel";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
})

const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get('/users')
    }
}

const postApiService = {
    getAllUsers: (): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get('/posts')
    }
}

const commentsApiService = {
    getAllUsers: (): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get('/comments')
    }
}

export {userApiService, postApiService, commentsApiService}