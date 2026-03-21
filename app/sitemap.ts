import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://gokulagrotourism.com/',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1
    },
    {
      url: 'https://gokulagrotourism.com/#about',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: 'https://gokulagrotourism.com/#contact',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: 'https://gokulagrotourism.com/#packages',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: 'https://gokulagrotourism.com/privacy-policy',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: 'https://gokulagrotourism.com/videos',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.8
    }
  

  ]
  };

