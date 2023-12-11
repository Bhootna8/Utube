import axios from 'axios'
const Key1 = "AIzaSyBzkMPBVjjhtrL2F0ke51VHtmrVQQzrofQ"
const Key3 = "AIzaSyCbpLQ7gwnxOGTsBLdS8z_V17pMjRTr1gQ"
const Key2 = "AIzaSyAVNtjb_dypuMWq7lBFQT34Z2-Vr4b1JqU"
const Key4 = "AIzaSyAfPBpC9xgiXvw9X5_AqnypZ7UTMu-LzJk"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/search",
    params: {
        type: 'video',
        part: 'snippet',
        myRating: 'like',
        key: Key1,
        order: 'viewCount',
        maxResults: 32,
        chart: 'mostPopular'
    }
})