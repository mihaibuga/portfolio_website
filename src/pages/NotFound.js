import { useEffect } from 'react';

const NotFound = () => {
    useEffect(() => {
        document.title = 'Page Not Found';
    }, []);

    return (
        <div className='container'>
            <h1>404</h1>
            <p>Not found</p>
        </div>
    );
};

export default NotFound;