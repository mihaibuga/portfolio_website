import { useEffect } from "react";
import { getProjects } from "./dataFetching";
import useDataStore from "../store/dataStore";

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
