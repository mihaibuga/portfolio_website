import { allProjectsQuery, projectDetailsQuery, profileDataQuery, siteSettingsQuery } from "./queries";
import { client } from "./sanityClient";

export const getData = async (query) => {
    try {
        const data = await client.fetch(query);
        return data;
    } catch (error) {
        console.log("Unexpected error: ", error);
        return "An unexpected error has occurred.";
    }
}

export const getProjects = async () => {
    const query = allProjectsQuery();
    return await getData(query);
};

export const getProject = async () => {
    const query = projectDetailsQuery();
    return await getData(query);
};

export const getProfile = async () => {
    const query = profileDataQuery();
    return await getData(query);
}

export const getSiteSettings = async () => {
    const query = siteSettingsQuery();
    return await getData(query);
}