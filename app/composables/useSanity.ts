import { createClient } from '@sanity/client'

export const useSanity = () => {
  const config = useRuntimeConfig()
  
  const client = createClient({
    projectId: config.public.sanityProjectId,
    dataset: config.public.sanityDataset,
    apiVersion: config.public.sanityApiVersion,
    useCdn: true
  })

  return { client }
}

export const useSanityQuery = async <T>(query: string) => {
  const { client } = useSanity()
  const data = await useAsyncData<T>('sanity-query', () => client.fetch(query))
  return data
}
