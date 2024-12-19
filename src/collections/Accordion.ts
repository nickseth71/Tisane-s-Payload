import { CollectionConfig } from 'payload';

const Accordion: CollectionConfig = {
  slug: 'accordion', 
  admin: {
    useAsTitle: 'heading',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading', // Main heading field
    },
    {
      name: 'caption',
      type: 'text',
      required: false,
      label: 'Caption', // Optional caption field
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', 
      required: true,
      label: 'Image', // Field for uploading an image
    },
    {
      name: 'accordion',
      type: 'array', // Array field for multiple accordion items
      label: 'Accordion',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Accordion Title', // Title for the accordion item
        },
        {
          name: 'content',
          type: 'richText', // Rich text editor for accordion content
          required: true,
          label: 'Accordion Content',
        },
      ],
    },
  ],
};

export default Accordion;
