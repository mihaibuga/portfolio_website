import { Outlet } from "react-router";
import { useFetchData } from "./utils/hooks";

const App = () => {
    useFetchData();

    return (
        <>
            <Outlet />
        </>
    );
};

export default App;
