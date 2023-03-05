import { useEffect } from 'react';

const NotFound = () => {
    useEffect(() => {
        document.title = 'Page Not Found';
    }, []);

    return (
        <main className="container">
            <h1>404</h1>
            <p>Not found</p>
        </main>
    );
};

export default NotFound;