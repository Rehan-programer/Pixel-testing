
import { customAxios } from "./instance";
const API_URL = process.env.NEXT_PUBLIC_API_LINK;
export const createQoute = async (data) => {
    try {
        const res = await customAxios.post(`/api/lead`,data);
        return res.data;
    } catch (error) {
        throw error;
    }
}


