import {createClient} from '@sanity/client'
export const client = createClient({
  projectId: "ow1btmcp",
  dataset: "production",
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12',
});