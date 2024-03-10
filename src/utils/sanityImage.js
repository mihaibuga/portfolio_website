import createImageUrlBuilder from '@sanity/image-url'

import { sanityDataset, sanityProjectId } from './env'

const imageBuilder = createImageUrlBuilder({
  projectId: sanityProjectId || '',
  dataset: sanityDataset || '',
})

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}
