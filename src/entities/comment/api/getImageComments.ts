import axiosInstance, { API_URL } from "@/shared/api/axios-client"

export const getImageComments = async (imageId: number): Promise<Comment[]> => {
  const response = await axiosInstance.get(`${API_URL}/image/${imageId}`);
  return response.data;
};