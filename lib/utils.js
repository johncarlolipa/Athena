import axios from "axios";
import { POSTS_API_URL, PRODUCTS_API_URL } from "./constants";

export const getAllPostsFromServer = async () => {
  try {
    const { data } = await axios.get(POSTS_API_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProductsFromServer = async () => {
  try {
    const { data } = await axios.get(PRODUCTS_API_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};
