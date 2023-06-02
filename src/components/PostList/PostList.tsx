import React from "react";
import { useNavigate } from "react-router-dom";

import { postList } from "../../mocks/PostList";
import classes from "./PostList.module.scss";
import PostListItem from "./PostListItem/PostListItem";


const PostList = () => {
    const navigate = useNavigate();

    const onPostClickedHandler = (postInfo: any) => {
        navigate("/posts/" + postInfo.id, { state: postInfo });
    }

	const content = postList.map(postItem => {
        return (
            <PostListItem
                key={postItem.id}
                postData={postItem}
                clicked={() => onPostClickedHandler(postItem)}
            />
        );
    })

	return (
		<ul className={classes.PostList}>
			{content}
		</ul>
	)
}

export default PostList;