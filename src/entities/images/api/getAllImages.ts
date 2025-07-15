import axiosInstance, { API_URL } from "@/shared/api/axios-client"

export const getAllImages = async () => {
    const response = await axiosInstance.get(`${API_URL}/images`)
    return response.data
}