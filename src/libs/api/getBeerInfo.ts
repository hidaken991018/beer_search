import { axiosInstance } from "src/libs/axiosInstance";
import { API_URL } from "src/utils/constants";

export const getBeerInfo= () => {
    return axiosInstance.get(API_URL.BEER_INFO);
}