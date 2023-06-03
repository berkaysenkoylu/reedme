interface PostBase {
    id: string
    title?: string
    content: string
    author: string
    upvote: number
    downvote: number
    date: number
}

interface CommentBase {
    id: string
    content: string
    author: string
    upvote: number
    downvote: number
    date: number
    responses: CommentBase[]
}

export interface CommentType extends PostBase {
    responses?: CommentBase[]
}

export interface Post extends PostBase {
    comments: CommentType[]
}