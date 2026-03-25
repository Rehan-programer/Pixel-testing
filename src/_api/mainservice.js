
import { customAxios } from "./instance";

const API_URL = process.env.NEXT_PUBLIC_API_LINK;


export const findAllService = async (lang) => {
    const res = await customAxios.get(`${API_URL}services/all-service/${lang}`);
    return res.data;
};