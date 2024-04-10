import axios from "axios";

const COMMENT_REST_API_BASE_URL = 'http://localhost:8080/api/comments';

export const listComments = () => {
    return axios.get(COMMENT_REST_API_BASE_URL);
}

export const createComment = (comment) => {
    return axios.post(COMMENT_REST_API_BASE_URL, comment);
}

export const removeComment = (commentId) => {
    return axios.delete(COMMENT_REST_API_BASE_URL+'/'+commentId);
}