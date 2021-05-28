import axios from "axios";

// TODO: Declare url for rest api
const NEWS_API_BASE_URL = "http://localhost:8080/news";

export default new class NewsService {

    // TODO: Method for add new News to database
    postNews(news) {
        return axios.post(NEWS_API_BASE_URL, news);
    }

    // TODO: Method for get all News from database
    getNews() {
        return axios.get(NEWS_API_BASE_URL);
    }
}