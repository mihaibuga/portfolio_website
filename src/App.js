import { Outlet } from "react-router";
import useDataStore from "./store/dataStore";
import { useEffect } from "react";
import { getProfile, getSiteSettings } from "./utils/dataFetching";

const App = () => {
    const { storeProfileData, setStoreProfileData, storeSiteSettings, setStoreSiteSettings } = useDataStore();

    useEffect(() => {
        const fetchData = async () => {
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
