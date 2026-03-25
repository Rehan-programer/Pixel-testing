
import { customAxios } from "./instance";
const API_URL = process.env.NEXT_PUBLIC_API_LINK;
export const createSubsribeQuote = async (data) => {
    try {
        const res = await customAxios.post(`${API_URL}quote/subscribe`,data);
        return res.data;
    } catch (error) {
        throw error;
    }
}


