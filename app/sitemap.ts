import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://gokulagrotourism.co.in/',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1
    },
    {
      url: 'https://gokulagrotourism.co.in/#about',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: 'https://gokulagrotourism.co.in/#contact',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: 'https://gokulagrotourism.co.in/#packages',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: 'https://gokulagrotourism.co.in/privacy',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8
    },

  ]
  };

