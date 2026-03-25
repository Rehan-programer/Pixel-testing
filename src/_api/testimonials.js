import { customAxios } from "./instance";

const API_URL = process.env.NEXT_PUBLIC_API_LINK;



// Get all sub-services for a main service
export const findAllTestamonials = async (lang) => {
    try {
        const res = await customAxios.get(`${API_URL}testimonials/all/${lang}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}


