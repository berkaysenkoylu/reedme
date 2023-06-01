import React, { Fragment } from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';

interface LayoutProps {
    children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
    const { children } = props;
	const contentStyle = {
		margin: "5rem 0 0 0"
	};

    const content = (
        <Fragment>
			<Toolbar />

            <div style={contentStyle}>
                {children}
            </div>
        </Fragment>
    );

    return content;
}

export default Layout;