import React from 'react';

import classes from "./PostListItem.module.scss";
import type { Post } from "../../../mocks/types";

interface PostListItemProps {
    postData: Post
}

const PostListItem = (props: PostListItemProps) => {
    const { postData } = props;
    return (
        <li className={classes.PostListItem}>
            <div className={classes.PostListItem__Vote}>VOTE</div>
            <div className={classes.PostListItem__Content}>
                <div className={classes.PostListItem__Content__Thumbnail}>
                    <span>&nbsp;</span>
                </div>
                <div className={classes.PostListItem__Content__Body}>
                    <h3 className={classes.PostListItem__Content__Body__Title}>{postData.title}</h3>
                    <div className={classes.PostListItem__Content__Body__Info}>{`r/subredditname • Posted by ${postData.author}`}</div>
                    <div className={classes.PostListItem__Content__Body__Cta}>CTA</div>
                </div>
            </div>
        </li>
    );
}

export default PostListItem