import axiosInstance, { API_URL } from "@/shared/api/axios-client"
import { Comment } from "@/entities/comment/model/types"

export type ImageObject = {
  id: number
  largeImage: string
  comments: Comment[]
}

export const getImageObject = async (imageId: number): Promise<Comment[]> => {
  const response = await axiosInstance.get(`${API_URL}/image/${imageId}`);
  return response.data;
};