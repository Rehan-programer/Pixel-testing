import { customAxios } from "./instance";

const API_URL = process.env.NEXT_PUBLIC_API_LINK;

export const findAllSubServices = async (lang) => {
    try {
        const res = await customAxios.get(`${API_URL}subservice/get-by-lang/${lang}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}