import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: "2k1z67kv",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, 
  token: import.meta.env.REACT_PUBLIC_SANITY_TOKEN,
})
