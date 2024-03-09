const assertValue = (v, errorMessage) => {
    if (v === undefined) {
        throw new Error(errorMessage);
    }

    return v;
}

export const studioTitle = process.env.SANITY_STUDIO_TITLE || "Portfolio Website";
export const apiVersion = process.env.SANITY_STUDIO_API_VERSION || "2024-03-09";
export const useCdn = false;

export const dataset = assertValue(
    process.env.SANITY_STUDIO_DATASET,
    "Missing environment variable: SANITY_STUDIO_DATASET"
);

export const projectId = assertValue(
    process.env.SANITY_STUDIO_PROJECT_ID,
    "Missing environment variable: SANITY_STUDIO_PROJECT_ID"
);

export const token = assertValue(
    process.env.SANITY_STUDIO_TOKEN,
    "Missing environment variable: SANITY_STUDIO_TOKEN"
);
