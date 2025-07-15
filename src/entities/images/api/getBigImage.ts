import axiosInstance, { API_URL } from "@/shared/api/axios-client"

export const getBigImage = async (imageId: number) => {
    const response = await axiosInstance.get(`${API_URL}/image/${imageId}`)
    return response.data
}