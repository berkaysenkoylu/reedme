import React from 'react';

import classes from "./CommentList.module.scss"
import Comment from './Comment/Comment';

interface CommentListProps {
    comments: any[]
}

const CommentList = (props: CommentListProps) => {
    const { comments } = props;

    const content = comments.map(commentItem => {
        return (
            <Comment key={commentItem.id} data={commentItem} />
        );
    })

    return (
        <div className={classes.CommentList}>
            {content}
        </div>
    );
}

export default CommentList;