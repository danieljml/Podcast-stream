import axios from 'axios';
import CryptoJS from 'crypto-js';

const apiKey = "BSF8RLDX4MB7XVEQKR3D";
const apiSecret = "WVf3ENMTwZcS8d#vwxcv3tubJKwxUzxhupuyU8h3";

export const fetchTrendingPodcasts = async () => {
  try {
    const url = 'https://api.podcastindex.org/api/1.0/podcasts/trending';
    const apiHeaderTime = Math.floor(Date.now() / 1000);
    const data4Hash = apiKey + apiSecret + apiHeaderTime;
    const hash4Header = CryptoJS.SHA1(data4Hash).toString(CryptoJS.enc.Hex);

    const headers = {
      "X-Auth-Date": "" + apiHeaderTime,
      "X-Auth-Key": apiKey,
      Authorization: hash4Header
    };

    const response = await axios.get(url, { headers });
    return response.data.feeds;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const searchPodcasts = async (query: string) => {
  try {
    const url = `https://api.podcastindex.org/api/1.0/search/byterm?q=${query}`;
    const apiHeaderTime = Math.floor(Date.now() / 1000);
    const data4Hash = apiKey + apiSecret + apiHeaderTime;
    const hash4Header = CryptoJS.SHA1(data4Hash).toString(CryptoJS.enc.Hex);

    const headers = {
      "X-Auth-Date": "" + apiHeaderTime,
      "X-Auth-Key": apiKey,
      Authorization: hash4Header
    };

    const response = await axios.get(url, { headers });
    return response.data.feeds;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const fetchPodcastById = async (id: string) => {
  try {
    const url = `https://api.podcastindex.org/api/1.0/podcasts/byfeedid?id=${id}`;
    const apiHeaderTime = Math.floor(Date.now() / 1000);
    const data4Hash = apiKey + apiSecret + apiHeaderTime;
    const hash4Header = CryptoJS.SHA1(data4Hash).toString(CryptoJS.enc.Hex);

    const headers = {
      "X-Auth-Date": "" + apiHeaderTime,
      "X-Auth-Key": apiKey,
      Authorization: hash4Header
    };

    const response = await axios.get(url, { headers });
    return response.data.feed;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const fetchPodcastEpisodesById = async (id: string) => {
  try {
    const url = `https://api.podcastindex.org/api/1.0/episodes/byfeedid?id=${id}`;
    const apiHeaderTime = Math.floor(Date.now() / 1000);
    const data4Hash = apiKey + apiSecret + apiHeaderTime;
    const hash4Header = CryptoJS.SHA1(data4Hash).toString(CryptoJS.enc.Hex);

    const headers = {
      "X-Auth-Date": "" + apiHeaderTime,
      "X-Auth-Key": apiKey,
      Authorization: hash4Header
    };

    const response = await axios.get(url, { headers });
    return response.data.items;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
