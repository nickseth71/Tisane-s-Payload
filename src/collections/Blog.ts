import { CollectionConfig } from 'payload';

const Blog: CollectionConfig = {
  slug: 'blog', // The collection's API slug
  admin: {
    useAsTitle: 'title', // The field to use as the default title in the admin panel
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true, // Ensure slugs are unique
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users', // Relates to the built-in Users collection
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media', // Relates to a media collection for image uploads
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
      defaultValue: 'draft',
      required: true,
    },
  ],
};

export default Blog;
