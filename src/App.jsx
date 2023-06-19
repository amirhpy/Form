import React from 'react';
import { Link, useRoutes } from 'react-router-dom';

import routes from './routes';

const App = () => {
    let router = useRoutes(routes)
    return (
        <>
            <div className='flex flex-col text-2xl font-medium leading-9 tracking-tight text-gray-900'>
                <Link to='/'>Sign in</Link>
                <Link to='/users'>Users</Link>
            </div>
            {router}
        </>
    );
};

export default App;