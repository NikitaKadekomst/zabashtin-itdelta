import { useQuery } from "@tanstack/react-query"
import { getAllImages } from "../../images/api/getAllImages"
import { type Image } from "@/entities/images/model/types"

export const useImages = () => {
    const { data: images, isPending: isImagesLoading } = useQuery<Image[]>({
        queryFn: getAllImages,
        queryKey: ['allImages']
    })

    return {
        images,
        isImagesLoading,
    }
}