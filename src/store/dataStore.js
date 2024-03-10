import { create } from "zustand";
import { persist } from "zustand/middleware";

const dataStore = (set) => ({
    storeProjects: null,
    setStoreProjects: (data) => set({ storeProjects: data }),

    storeProfileData: null,
    setStoreProfileData: (data) => set({ storeProfileData: data }),

    storeSiteSettings: null,
    setStoreSiteSettings: (data) => set({ storeSiteSettings: data })
});

const useDataStore = create(
    persist(dataStore, {
        name: "dataStore",
    })
);

export default useDataStore;