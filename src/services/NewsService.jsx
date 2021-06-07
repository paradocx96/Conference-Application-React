// TODO: IT19180526 - Chandrasiri S A N L D

import axios from "axios";

// TODO: Based url for rest api
const COMMON_URL = "http://localhost:8080";
const NEWS_API = "/news";
const NEWS_API_BASE_URL = COMMON_URL + NEWS_API;

export default new class NewsService {

    // TODO: Method for add new News to database
    postNews(news) {
        return axios.post(NEWS_API_BASE_URL + "/add", news);
    }

    // TODO: Method for get all News from database
    getNews() {
        return axios.get(NEWS_API_BASE_URL + "/get");
    }

    // TODO: Method for get News by Status
    getNewsByStatus(status) {
        return axios.get(NEWS_API_BASE_URL + "/get-by-status/" + status);
    }

    // TODO: Method fot update News's Status
    updateNewsStatusById(id, status) {
        return axios.put(NEWS_API_BASE_URL + "/update-status/" + id, status, {headers: AuthHeader()});
    }

    // TODO: Method for Delete a News by ID
    deleteNewsById(id) {
        return axios.delete(NEWS_API_BASE_URL + "/delete/" + id, {headers: AuthHeader()});
    }

    // TODO: Method for get News By Id
    getNewsById(id) {
        return axios.get(NEWS_API_BASE_URL + "/get-by-id/" + id);
    }

    //TODO: Method for update News
    updateNews(id, news) {
        return axios.put(NEWS_API_BASE_URL + "/update/" + id, news);
    }
}
