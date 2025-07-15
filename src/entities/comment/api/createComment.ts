import axiosInstance, { API_URL } from "@/shared/api/axios-client"

export type Comment = {
    comment: string
}

export interface createCommentProps {
    imageId: number
    comment: Comment
}

export const createComment = async ({ imageId, comment }: createCommentProps) => {
    const response = await axiosInstance.post(`${API_URL}/image/${imageId}/comments`, comment)
    return response.data
}