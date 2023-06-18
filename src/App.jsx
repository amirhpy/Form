import React from 'react';
import { Link, useRoutes } from 'react-router-dom';

import routes from './routes';

const App = () => {
    let router = useRoutes(routes)
    return (
        <>
            <div className=''>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
            </div>
            {router}
        </>
    );
};

export default App;