import { CollectionConfig } from 'payload';

const MultipleLogos: CollectionConfig = {
  slug: 'multiple-logos',
  fields: [
    {
        name: 'images',
        type: 'array', // Allow multiple images
        required: true, // Make it mandatory
        fields: [
          {
            name: 'image',
            type: 'upload',
            relationTo: 'media', // Reference the Media collection
            required: true,
          },
          {
            name: 'caption',
            type: 'text',
            required: false, // Optional caption for the image
          },
        ],
      },
    {
      name: 'heading',
      type: 'text',
      required: true, // Make heading mandatory
    },
    {
      name: 'subtext',
      type: 'textarea',
      required: false, // Subtext is optional
    },
  ],
};

export default MultipleLogos;