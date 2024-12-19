import { CollectionConfig } from 'payload';

const TabsContent: CollectionConfig = {
  slug: 'tabs-content', 
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
      name: 'subHeading',
      type: 'text',
      required: false,
      label: 'Sub Heading', 
    },
    {
      name: 'tabs',
      type: 'array',
      label: 'Tab Section',
      minRows: 1, 
      fields: [
        {
          name: 'mainTitle',
          type: 'text',
          required: true,
          label: 'Tab Main Title', 
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', 
          required: true,
          label: 'Tab Image', 
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          label: 'Tab Heading', 
        },
        {
          name: 'subHeading',
          type: 'text',
          required: false,
          label: 'Tab Sub Heading', 
        },
        {
          name: 'button',
          type: 'group', 
          label: 'Button Settings',
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
      ],
    },
  ],
};

export default TabsContent;
