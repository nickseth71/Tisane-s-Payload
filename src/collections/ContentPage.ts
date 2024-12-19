import { CollectionConfig } from 'payload';

const ContentPage: CollectionConfig = {
  slug: 'content-page',
  admin: {
    useAsTitle: 'mainHeading', // The field to use as the default title in the admin panel
  },
  fields: [
    // Main Heading
    {
      name: 'mainHeading',
      type: 'text',
      label: 'Main Heading',
      required: true,
    },
    // Subheading under the first heading
    {
      name: 'mainSubheading',
      type: 'text',
      label: 'Main Subheading',
    },
    // Logo Field
    {
      name: 'logo',
      type: 'upload',
      label: 'Logo',
      relationTo: 'media', // Assuming a Media collection is set up for images
      required: true,
    },
    // Logo Text Section
    {
      name: 'textSection',
      type: 'richText',
      label: 'Logo Text Section',
    },
    // Banner Main Heading
    {
      name: 'secondaryHeading',
      type: 'text',
      label: 'Banner Heading',
    },
    //Banner Subheading under the Main heading
    {
      name: 'secondarySubheading',
      type: 'text',
      label: 'Banner Subheading',
    },
    //Banner Image Field
    {
      name: 'image',
      type: 'upload',
      label: 'Banner Image',
      relationTo: 'media', // Relation to media for image uploads
      required: false,
    },
    // Block Section - Allows users to add multiple blocks
    {
      name: 'blocks',
      type: 'array',
      label: 'Blocks Section',
      labels: {
        singular: 'Block',
        plural: 'Blocks',
      },
      fields: [
        // Image inside the block
        {
          name: 'blockImage',
          type: 'upload',
          label: 'Block Image',
          relationTo: 'media',
        },
        // Heading inside the block
        {
          name: 'blockHeading',
          type: 'text',
          label: 'Block Heading',
        },
        // Subheading inside the block
        {
          name: 'blockSubheading',
          type: 'text',
          label: 'Block Subheading',
        },
        // Link field inside the block
        {
          name: 'blockLink',
          type: 'text',
          label: 'Block Link',
          required: false,
          admin: {
            description: 'Add a URL to link this block (e.g., https://example.com)',
          },
        },
      ],
    },
  ],
};

export default ContentPage;
