const assertValue = (v, errorMessage) => {
    if (v === undefined) {
        throw new Error(errorMessage);
    }

    return v;
}

export const apiDomain = assertValue(
    process.env.REACT_APP_API_DOMAIN,
    "Missing environment variable: REACT_APP_API_DOMAIN"
);

export const sanityDataset = assertValue(
    process.env.REACT_APP_SANITY_DATASET,
    "Missing environment variable: REACT_APP_SANITY_DATASET"
);

export const sanityProjectId = assertValue(
    process.env.REACT_APP_SANITY_PROJECT_ID,
    "Missing environment variable: REACT_APP_SANITY_PROJECT_ID"
);

export const sanityToken = assertValue(
    process.env.REACT_APP_SANITY_TOKEN,
    "Missing environment variable: REACT_APP_SANITY_TOKEN"
);

export const sanityUseCdn = false;
export const sanityApiVersion = process.env.REACT_APP_SANITY_API_VERSION || "2024-03-09";