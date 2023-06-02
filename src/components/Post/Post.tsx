import React from "react";
import { useLocation } from "react-router-dom";

import classes from "./Post.module.scss";
import CommentList from "./CommentList/CommentList";

const Post = () => {
    const { state } = useLocation();
    console.log(state)
    
    return (
        <div className={classes.Post}>
            <div className={classes.Post__Vote}>VOTE</div>
            <div className={classes.Post__Top}>
                <div>{`Posted by ${state.author}`}</div>
                <span>Bell</span>
            </div>
            <div className={classes.Post__Title}>
                <h1>{state.title}</h1>
            </div>
            <div className={classes.Post__Content}>
                <h1>{state.content}</h1>
            </div>
            <div className={classes.Post__Extra}>
                <div>{`${state.comments.length} Comments`}</div>
            </div>

            <div className={classes.MakeComment}>
                COMMENT INPUT FIELD
            </div>

            <div className={classes.CommentFilter}>
                COMMENT SORT | FILTER
            </div>

            <CommentList comments={state.comments} />
        </div>
    );
}

export default Post;