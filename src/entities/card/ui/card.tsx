import { createComment } from "@/entities/comment/api/createComment"
import { DialogHeader } from "@/shared/ui/shadcn/dialog"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/shared/ui/shadcn/dialog"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { Comment } from '@/entities/comment/ui/comment'
import { getImageObject } from "@/entities/comment/api/getImageComments"

interface CardProps {
    imageId: number
    imageUrl: string
}

export function Card({ imageId, imageUrl }: CardProps) {
    const [commentText, setCommentText] = useState('');

    const queryClient = useQueryClient();
    const { data: imageObject, isPending: isImageObjectLoading } = useQuery<Comment[]>({
        queryFn: ({ queryKey }) => {
            const [_key, imageId] = queryKey;
            return getImageObject(imageId as number);
        },
        queryKey: ['imageComments', imageId]
    });

    useEffect(() => {
        console.log('Текущий объект изображения:', imageObject)
    }, [imageObject])

    const { mutate: commentCreate, isPending: isSubmitting } = useMutation({
        mutationFn: createComment,
        onSuccess: () => {
            setCommentText('');
            queryClient.invalidateQueries({ 
                queryKey: ['imageComments', imageId],
                refetchType: 'active' 
            });
        },
        onError: (error) => {
            console.error('Error creating comment:', error);
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (commentText.trim() && !isSubmitting) {
            console.log('Отправка комментария:', commentText.trim());
            commentCreate({ 
                imageId, 
                comment: { comment: commentText.trim() } 
            });
        }
    };
    
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
                    {isImageObjectLoading ? (
                        <div className="w-full h-[200px] flex items-center justify-center bg-gray-200 animate-pulse">
                            <span>Загрузка изображения...</span>
                        </div>
                        ) : imageObject?.largeImage ? (
                        <img 
                            className="w-full h-[200px] object-cover" 
                            src={imageObject.largeImage} 
                        />
                        ) : (
                        <div className="w-full h-[200px] flex items-center justify-center bg-gray-200">
                            <span>No image available</span>
                        </div>
                    )}                
                    <div className="mt-4">
                    <h3 className="font-medium text-lg mb-2">Комментарии ({imageObject?.comments?.length || 0})</h3>
                    <div className="space-y-3 mb-4">
                        {isImageObjectLoading ? (
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