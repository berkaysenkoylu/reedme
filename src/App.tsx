import React from 'react';

import Layout from './hoc/Layout/Layout';
import PostList from './components/PostList/PostList';

const App = () => {
	const content = (
		<Layout>
			<PostList />
		</Layout>
	);

	return content;
};

export default App;