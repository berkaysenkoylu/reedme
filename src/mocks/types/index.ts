interface PostBase {
    id: string
    title?: string
    content: string
    author: string
    upvote: number
    downvote: number
    date: number
}

type Comment = PostBase & {
    responses?: Comment[]
}

export interface Post extends PostBase {
    comments: Comment[]
}