import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import PostList from "./components/PostList/PostList";
import Post from "./components/Post/Post";

const App = () => {
    const routes = (
        <Routes>
            <Route path="/posts/*" element={<Post />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/*" element={<div>HOME</div>} />
        </Routes>
    );

	const content = (
		<Layout>
			{routes}
		</Layout>
	);

	return content;
};

export default App;