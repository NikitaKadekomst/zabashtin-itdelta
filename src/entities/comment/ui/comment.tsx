import { type Comment } from '@/entities/comment/model/types'

interface CommentProps {
    comment: Comment
}

export function Comment({ comment }: CommentProps) { 
    return (
    <div key={comment.id} className="p-4 bg-white rounded-lg shadow-sm border border-gray-300 hover:shadow transition-shadow">
        <div className="flex items-start gap-3">
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
    </div>
    )
}