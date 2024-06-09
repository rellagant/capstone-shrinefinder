import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export class ShrineFinderApi {
  constructor() {
    this.baseURL = API_URL;
  }

  async getShrines() {
    try {
      const response = await axios.get(`${this.baseURL}/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching all shrines:", error);
      throw error;
    }
  }

  async getPrefectures() {
    try {
      const response = await axios.get(`${this.baseURL}/prefectures`);
      return response.data;
    } catch (error) {
      console.error("Error fetching prefectures:", error);
      throw error;
    }
  }

  async getRandomShrine() {
    try {
      const response = await axios.get(`${this.baseURL}/random`);
      return response.data;
    } catch (error) {
      console.error("Error fetching random shrine:", error);
      throw error;
    }
  }

  async getShrineById(id) {
    try {
      const response = await axios.get(`${this.baseURL}/shrine/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching shrine by id ${id}:`, error);
      throw error;
    }
  }

  async getReviewsByShrineId(id) {
    try {
      const response = await axios.get(`${this.baseURL}/reviews/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching shrine by id ${id}:`, error);
      throw error;
    }
  }

  async getShrinesByPrefecture(prefecture) {
    try {
      const response = await axios.get(
        `${this.baseURL}/shrines/${prefecture}`
      );
      return response.data;
    } catch (error) {
      console.error(
        `Error fetching shrines by prefecture ${prefecture}:`,
        error
      );
      throw error;
    }
  }

  async postReview(shrineId, review) {
    try {
      const response = await axios.post(
        `${this.baseURL}/${shrineId}/reviews`,
        review
      );
      return response.data;
    } catch (error) {
      console.error(`Error posting review for shrine ${shrineId}:`, error);
      throw error;
    }
  }
}
