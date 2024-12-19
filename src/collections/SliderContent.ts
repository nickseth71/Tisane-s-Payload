import { CollectionConfig } from 'payload';

const SliderContent: CollectionConfig = {
  slug: 'slider-content',
  admin: {
    useAsTitle: 'heading', // Use the heading as the title
  },
  fields: [
    {
      name: 'heading', // Add heading field directly to the collection
      type: 'text',
      required: true,
      label: 'Heading',
    },
    {
      name: 'blocks',
      type: 'array',
      label: 'Content Blocks',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          label: 'Block Heading',
        },
        {
          name: 'subHeading',
          type: 'text',
          required: false,
          label: 'Sub Heading',
        },
        {
          name: 'button',
          type: 'group',
          label: 'Button',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Button Label',
            },
            {
              name: 'link',
              type: 'text',
              required: true,
              label: 'Button Link',
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
      ],
    },
  ],
};

export default SliderContent;
