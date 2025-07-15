import { type Comment } from '@/entities/comment/model/types'

interface CommentProps {
    comment: Comment
}

export function Comment({ comment }: CommentProps) { 
    return (
        <div key={comment.id} className="p-4 bg-white rounded-lg shadow-sm border border-gray-300 hover:shadow transition-shadow">
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-3 w-full">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm">
                        {comment.author.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                        <p className="font-medium text-gray-900 text-sm truncate">
                            {comment.author}
                        </p>
                        </div>
                        <p className="mt-1 text-gray-700 text-sm">
                        {comment.text}
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center h-[100%]">
                    <span className="text-gray-500 text-sm w-[50px] text-right">ID: {comment.id}</span>
                </div>
            </div>
        </div>
    )
}