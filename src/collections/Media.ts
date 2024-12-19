import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: () => true, 
    read: () => true, 
  },
  upload: {
    staticDir: './media',
    mimeTypes: ['image/*'], 
  },
  auth: true,
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
