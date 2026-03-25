import { customAxios } from "./instance";

const API_URL = process.env.NEXT_PUBLIC_API_LINK;



// Get all sub-services for a main service
export const findAllBlogPosts = async (lang) => {
    try {
        const res = await customAxios.get(`${API_URL}blog/all-blog/${lang}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}


