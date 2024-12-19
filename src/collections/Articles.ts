import { CollectionConfig } from 'payload';

const Articles: CollectionConfig = {
  slug: 'articles', 
  admin: {
    useAsTitle: 'heading', 
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading', 
    },
    {
      name: 'article',
      type: 'array',
      label: 'article Section',
      minRows: 1, 
      fields: [
        {
          name: 'mainTitle',
          type: 'text',
          required: true,
          label: 'Article Main Title', 
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', 
          required: true,
          label: 'Article Image', 
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          label: 'Article Heading', 
        },
        {
          name: 'subHeading',
          type: 'text',
          required: false,
          label: 'Article Sub Heading', 
        },
        {
          name: 'link', 
          type: 'text',
          required: true,
          label: 'Article Link',
        },
      ],
    },
  ],
};

export default Articles;
