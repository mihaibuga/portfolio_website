import { Outlet } from "react-router";
import useDataStore from "./store/dataStore";
import { useEffect } from "react";
import { getProjects, getProfile, getSiteSettings } from "./utils/dataFetching";

const App = () => {
    const {
        storeProjects,
        setStoreProjects,
        storeProfileData,
        setStoreProfileData,
        storeSiteSettings,
        setStoreSiteSettings,
    } = useDataStore();

    useEffect(() => {
        const fetchData = async () => {
            if (storeProjects === null) {
                const fetchedProjects = await getProjects();
                setStoreProjects(fetchedProjects);
            }

            if (storeProfileData === null) {
                const fetchedProfile = await getProfile();
                setStoreProfileData(fetchedProfile);
            }

            if (storeSiteSettings === null) {
                const fetchedSiteSettings = await getSiteSettings();
                setStoreSiteSettings(fetchedSiteSettings);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Outlet />
        </>
    );
};

export default App;
