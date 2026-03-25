import { customAxios } from "./instance";

const API_URL = process.env.NEXT_PUBLIC_API_LINK;

export const findAllProperties = async (lang) => {
    try {
        const res = await customAxios.get(`${API_URL}properties/get/translated/all?lang=${lang}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const findPropertyById = async ({ id, lang }) => {
  try {
    const res = await customAxios.get(
      `${API_URL}properties/get/${id}/translated?lang=${lang}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CreateProperty = async (payload) => {
  try {
    const res = await customAxios.post(`${API_URL}properties/create`, payload);
    return res.data;
  } catch (error) {
    throw error;
  }
};
