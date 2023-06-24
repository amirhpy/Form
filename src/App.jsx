import React from 'react';
import { useRoutes } from 'react-router-dom';

import Menu from './components/Menu/Menu';

import routes from './routes';

const App = () => {
    let router = useRoutes(routes)
    return (
        <>
            <Menu />
            {router}
        </>
    );
};

export default App;