import { useEffect } from "react";

import { getProfile, getProjects, getSiteSettings } from "./dataFetching";
import useDataStore from "../store/dataStore";

export const useFetchData = () => {
    const { setStoreProfileData, setStoreSiteSettings } = useDataStore();

    useEffect(() => {
        const fetchData = async () => {
            const fetchedProfile = await getProfile();
            setStoreProfileData(fetchedProfile);

            const fetchedSiteSettings = await getSiteSettings();
            setStoreSiteSettings(fetchedSiteSettings);
        };

        fetchData();
    }, []);
};

export const useFetchProjectsData = () => {
    const { setStoreProjects } = useDataStore();

    useEffect(() => {
        const fetchData = async () => {
            const fetchedProjects = await getProjects();
            setStoreProjects(fetchedProjects);
        };

        fetchData();
    }, []);
};
