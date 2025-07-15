import { createComment } from "@/entities/comment/api/createComment"
import { getImageComments } from "@/entities/comment/api/getImageComments"
import { DialogHeader } from "@/shared/ui/shadcn/dialog"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/shared/ui/shadcn/dialog"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { Comment } from '@/entities/comment/ui/comment'

interface CardProps {
    imageId: number
    imageUrl: string
}

export function Card({ imageId, imageUrl }: CardProps) {
    const [commentText, setCommentText] = useState('')

    const queryClient = useQueryClient()
    const { data: imageObject, isPending: isCommentsLoading } = useQuery<Comment[]>({
        queryFn: ({ queryKey }) => {
            const [_key, imageId] = queryKey; 
            return getImageComments(imageId as number); 
        },
        queryKey: ['imageComments', imageId]
    });

    const { mutate: commentCreate } = useMutation({
        mutationFn: createComment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['imageComments', imageId]})
        }
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (commentText.trim()) {
            commentCreate({ imageId, text: commentText })
        }
    }
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="animate-fade-in card gap-[40px] mb-3">
                    <div className="rounded-xl overflow-hidden shadow-lg h-[250px]">
                        <img className="w-full object-contain" src={imageUrl} alt="Sunset in the mountains" />
                    </div>
                    <div className="mt-3"><span>id: {imageId}</span></div>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Изображение с ID: {imageId}</DialogTitle>
                </DialogHeader>
                {imageObject && <img className="w-full h-[200px] object-cover" src={imageObject.largeImage || ''} alt="Sunset in the mountains" />}
                <div className="mt-4">
                    <h3 className="font-medium text-lg mb-2">Комментарии ({imageObject?.comments?.length || 0})</h3>
                    <div className="space-y-3 mb-4">
                        {isCommentsLoading ? (
                            <p className="text-gray-500 text-sm">Загрузка комментариев...</p>
                        ) : imageObject?.comments && imageObject.comments.length > 0 ? (
                            imageObject.comments.map(comment => (
                                <Comment key={comment.id} comment={comment} />
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm">Пока нет комментариев</p>
                        )}
                    </div>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <textarea
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Оставьте комментарий..."
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={3}
                        />
                        <button
                            type="submit"
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                            disabled={!commentText.trim()}
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}