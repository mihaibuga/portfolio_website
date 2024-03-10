import { createClient } from '@sanity/client';
import { sanityProjectId, sanityDataset, sanityUseCdn, sanityApiVersion } from './env';

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  useCdn: sanityUseCdn,
  apiVersion: sanityApiVersion
});