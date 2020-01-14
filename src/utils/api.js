import axios from "axios";
import { GIPHY_API_KEY } from "../config/config";

export const giphyApiSearchRequest = async searchedKeyword => {
    try {
        const giphyResponse = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${searchedKeyword}&limit=1000&offset=0&rating=G&lang=en
        `);

        const gifResult = giphyResponse.data.data;
        return gifResult;
    } catch (err) {
        console.log(err);
    }
};

export const giphyApiTrendingRequest = async () => {
    try {
        const giphyResponse = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=5&rating=G
        `);

        const gifResult = giphyResponse.data.data;
        return gifResult;
    } catch (err) {
        console.log(err);
    }
};
