import { useEffect } from 'react';

const NotFound = () => {
    useEffect(() => {
        document.title = 'Page Not Found';
    }, []);

    return (
        <>
            <h1>404</h1>
            <p>Not found</p>
        </>
    );
};

export default NotFound;