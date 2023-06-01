import React from 'react';

import { postList } from '../../mocks/PostList';
import classes from "./PostList.module.scss";
import PostListItem from './PostListItem/PostListItem';

const PostList = () => {
	const content = postList.map(postItem => {
        return (
            <PostListItem
                key={postItem.id}
                postData={postItem}
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